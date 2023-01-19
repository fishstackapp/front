
import { FC } from 'react';
import { CartItemLoading } from '../cart-item-loading/cart-item-loading.component';

interface CartItemListLoadingProps {
  amount: number;
}

export const CartItemListLoading: FC<CartItemListLoadingProps> = ({
  amount,
}) => {
  const items = new Array(amount).fill(1);

  return (
    <div className="flex flex-col gap-6">
      {items.map((el, index) => (
        <CartItemLoading key={`cart-item-loading-${index}`} />
      ))}
    </div>
  );
};