import { GetCustomerOrdersQuery } from '@app/core/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DateTime } from 'luxon';
import { FC } from 'react';

interface UserOrdersTableProps {
  data: GetCustomerOrdersQuery['orders'];
  orderStatus: GetCustomerOrdersQuery['order_status'];
  paymentStatus: GetCustomerOrdersQuery['payment_status'];
}

const columnHelper = createColumnHelper<GetCustomerOrdersQuery['orders'][0]>();

export const UserOrdersTable: FC<UserOrdersTableProps> = ({ data, orderStatus, paymentStatus }) => {
  const columns = [
    columnHelper.accessor('created_at', {
      header: 'Дата',
      cell: info =>
        DateTime.fromISO(info.getValue())
          .setZone('Europe/Kiev')
          .toLocaleString(DateTime.DATETIME_SHORT),
    }),
    columnHelper.accessor('order_items', {
      header: 'Опис',
      cell: info =>
        info
          .getValue()
          .map(orderItem => `${orderItem.item?.title} x ${orderItem.amount}`)
          .join(', '),
    }),
    columnHelper.accessor('status', {
      header: 'Статус',
      cell: info => orderStatus.find(st => st.id === info.getValue())?.label,
    }),
    columnHelper.accessor('sum', {
      header: 'Сума',
      cell: info => `${info.getValue()} грн.`,
    }),
    columnHelper.accessor('payment_status', {
      header: 'Статус оплати',
      cell: info => paymentStatus.find(st => st.id === info.getValue())?.label,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className='overflow-y-auto max-h-112'>
      <table className="hidden w-full sm:table">
        <thead className="border-t border-b border-gray-200 bg-gray-50 text-gray-900">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-2 px-6 text-left font-semibold">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white text-sm text-gray-900">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b border-gray-200">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-2 px-6">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="block px-6 sm:hidden overflow-y-auto max-h-112">
        {table.getRowModel().rows.map(row => (
          <ul key={row.id} className="border-b py-4 first-of-type:pt-0 last-of-type:border-0">
            {row.getVisibleCells().map(cell => (
              <li key={cell.id}>
                <span className="font-semibold">{cell.column.columnDef.header?.toString()}: </span>{' '}
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};
