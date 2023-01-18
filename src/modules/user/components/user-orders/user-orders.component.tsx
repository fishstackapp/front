import { FC } from 'react';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { UserOrdersTable } from '../user-orders-table/user-orders-table.component';
import { useGetCustomerOrdersQuery } from '@app/core/types';
import { UserOrdersTableLoading } from '../user-orders-table-loading/user-orders-table-loading.component';

interface UserOrdersProps {}

export const UserOrders: FC<UserOrdersProps> = () => {
  const { data, loading } = useGetCustomerOrdersQuery();

  return (
    <ActionPaper title="Ваші замовлення" disableBodyPadding disableBottomPadding>
      {loading ? (
        <UserOrdersTableLoading />
      ) : data?.orders.length ? (
        <UserOrdersTable data={data.orders} orderStatus={data.order_status} />
      ) : (
        <h1 className="p-6 text-center text-lg">У вас ще нема замовлень</h1>
      )}
    </ActionPaper>
  );
};
