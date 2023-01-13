import { FC, useRef } from 'react';
import { useReactiveVar } from '@apollo/client';
import { cartOpenedState, closeCart } from '../../store/cart-opened-state';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { ReactComponent as CartIcon } from '@app/assets/icons/cart-icon.svg';
import { CartItems } from '../cart-items/cart-items.component';
import { Button } from '@app/common/components/button/button.component';
import clsx from 'clsx';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { cartState } from '../../store/cart-state';

interface CartSidebarProps {
  items: any[];
}

export const CartSidebar: FC<CartSidebarProps> = ({ items }) => {
  const isOpened = useReactiveVar(cartOpenedState)
  const cartItems = useReactiveVar(cartState)

  const cartRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartRef, () => {
    if(isOpened) {
      closeCart();
    }
  })

  const cartClasses = clsx(
    'h-[calc(100vh_-_3rem)] w-112 p-6 shadow-xl fixed z-10 bg-white right-0 top-12 transition-all', 
    {
      'translate-x-full': !isOpened,
    }
  )

  return (
    <div className={cartClasses} ref={cartRef}>
      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-medium text-gray-900">Кошик</span>
        <button onClick={closeCart}>
          <XMarkSolidIcon className="h-3.5 w-3.5 child-path:fill-gray-400" />
        </button>
      </div>
      {items.length === 0 ? (
        <div className="flex h-[calc(100%_-_3.25rem)] w-full items-center justify-center border-2 border-dashed border-gray-200">
          <div className="flex flex-col items-center">
            <CartIcon className="mb-4 h-28 w-28 child-path:fill-gray-400" />
            <span className="text-lg font-medium text-gray-600">Кошик пустий</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 h-[calc(100%_-_3.25rem)]">
          <div className="flex flex-col gap-6 overflow-y-auto">
            {items.map(item => (
              <CartItems {...item} />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6 text-right text-sm font-medium text-gray-900">
            Усього: 1200 грн
          </div>
          <Button>Оформити замовлення</Button>
        </div>
      )}
    </div>
  );
};
