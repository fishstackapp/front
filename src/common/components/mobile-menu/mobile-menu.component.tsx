import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';

interface MobileMenuProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpened, setIsMenuOpened }) => {
  const { isLoggedin, logout } = useAuthState();
  
  const mobileMenuClasses = clsx('bg-white z-10 fixed w-full mt-12 h-full p-4 sm:hidden', {
    hidden: !isMenuOpened,
    block: isMenuOpened,
  });

  const closeMenu = () => setIsMenuOpened(false);

  const handleLogout = () => {
    closeMenu();
    logout();
  }

  return (
    <div className={mobileMenuClasses}>
      <ul>
        <li>
          <Link to="/chekout" className="block w-full border-b py-2" onClick={closeMenu}>
            До корзини
          </Link>
        </li>
        {isLoggedin ? (
          <>
            <li>
              <Link to="/profile" className="block w-full border-b py-2" onClick={closeMenu}>
                Ваш профіль
              </Link>
            </li>
            <li>
              <Link to="/" className="block w-full border-b py-2" onClick={handleLogout}>
                Вийти
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="block w-full border-b py-2" onClick={closeMenu}>
              Війти
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
