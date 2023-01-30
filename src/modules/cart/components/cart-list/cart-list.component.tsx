import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { CartItemListLoading } from '../cart-item-list-loading/cart-item-list-loading.component';
import { CartItem } from '../cart-item/cart-item.component';
import { useCartItems } from '@app/modules/checkout/hooks/use-cart-items';

enum CartSumItemPosition {
  top = 'top',
  bottom = 'bottom',
}

interface CartListProps {
  apendix?: ReactNode;
  scrollDisabled?: boolean;
  cartSumItemPosition?: keyof typeof CartSumItemPosition;
}
export const CartList: FC<CartListProps> = ({
  apendix,
  scrollDisabled = false,
  cartSumItemPosition = CartSumItemPosition.bottom,
}) => {
  const { data, previousData, loading, cartItems } = useCartItems();

  if (!data && !previousData && loading) {
    return <CartItemListLoading amount={4} />;
  }

  const cartSum =
    data?.menu.reduce((acc, el) => {
      return acc + el.price * cartItems[el.id];
    }, 0) ?? 0;

  const wrapperClasses = clsx('flex flex-col gap-6', {
    'h-[calc(100%_-_3.25rem)]': !scrollDisabled,
  });

  const listWrapperClasses = clsx('flex flex-col gap-6', {
    'overflow-y-auto': !scrollDisabled,
  });

  const cartSumItemClasses = clsx('text-right text-sm font-medium text-gray-900', {
    'border-t border-gray-200 pt-6': cartSumItemPosition === CartSumItemPosition.bottom,
  });

  const cartSumItem = <div className={cartSumItemClasses}>Усього: {cartSum} грн</div>;

  return (
    <div className={wrapperClasses}>
      {cartSumItemPosition === CartSumItemPosition.top && cartSumItem}
      <div className={listWrapperClasses}>
        {(data || previousData)?.menu.map(item => (
          <CartItem
            {...item}
            key={`cart-item-${item.id}`}
            count={cartItems[item.id]}
            menuItemId={item.id}
          />
        ))}
      </div>
      {cartSumItemPosition === CartSumItemPosition.bottom && cartSumItem}
      {apendix}
    </div>
  );
};
