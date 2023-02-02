import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';
import { toast } from 'react-toastify';
import { Badge } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { cartState } from '@app/modules/cart/store/cart-state';

interface MobileMenuProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpened, setIsMenuOpened }) => {
  const cartItems = useReactiveVar(cartState);
  const { isLoggedin, logout } = useAuthState();

  const mobileMenuClasses = clsx(
    'text-lg text-center bg-white z-10 fixed w-full mt-12 h-full p-10 sm:hidden',
    {
      hidden: !isMenuOpened,
      'block overflow-hidden': isMenuOpened,
    }
  );

  const closeMenu = () => setIsMenuOpened(false);

  const handleLogout = () => {
    closeMenu();
    logout();
    toast.success('Нам дуже прикро, що Ви покидаєте нас 😥', { autoClose: 2000 });
  };

  return (
    <div className={mobileMenuClasses}>
      <ul>
        <li>
          <Link to="/" className="block w-full border-b py-4" onClick={closeMenu}>
            На головну
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="block w-full border-b py-4" onClick={closeMenu}>
            <Badge badgeContent={Object.keys(cartItems).length} color="info">
              До кошика
            </Badge>
          </Link>
        </li>
        {isLoggedin ? (
          <>
            <li>
              <Link to="/profile" className="block w-full border-b py-4" onClick={closeMenu}>
                Ваш профіль
              </Link>
            </li>
            <li>
              <Link to="/" className="block w-full border-b py-4" onClick={handleLogout}>
                Вийти
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="block w-full border-b py-4" onClick={closeMenu}>
              Війти
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
