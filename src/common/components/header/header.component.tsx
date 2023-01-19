import { FC, useState } from 'react';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { Button } from '../button/button.component';
import { Skeleton } from '../skeleton/skeleton.component';
import { Link, useLocation } from 'react-router-dom';
import { HeaderCategoryLink } from '../link/link.component';
import { useReactiveVar } from '@apollo/client';
import { isLoginReactive } from '@app/modules/auth/store/reactive-vars';
import { toggleCart } from '@app/modules/cart/store/cart-opened-state';
import { ReactComponent as ShoppingCartSolidIcon } from '@app/assets/icons/shopping-cart-solid.svg';
import { ReactComponent as Bars3Icon } from '@app/assets/icons/bars-3.svg';
import clsx from 'clsx';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const isLogin = useReactiveVar(isLoginReactive);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isCheckoutPage = location.pathname === '/checkout';

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const togleMenuOpened = () => setIsMenuOpened(v => !v);
  const closeMenu = () => setIsMenuOpened(false);
  const mobileMenuClasses = clsx('bg-white z-10 fixed w-full mt-12 h-full p-4 sm:hidden', {
    hidden: !isMenuOpened,
    block: isMenuOpened,
  });

  return (
    <>
      <div className="fixed z-20 mb-6 sm:mb-12 flex h-12 w-full items-center justify-between bg-white px-2 shadow sm:px-6">
        <div className="flex h-full flex-1 items-center gap-3">
          <Link to="/" className="text-s font-semibold sm:text-xl">
            🐟 FishStack
          </Link>
          {isLoading ? (
            <>
              <div className="h-6 w-px bg-gray-200" />
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
            </>
          ) : (
            <>
              {isHomePage && (
                <div className="flex flex-1 items-center gap-3">
                  <div className="h-6 w-px bg-gray-200" />
                  {categories?.map(category => (
                    <HeaderCategoryLink
                      url={`#${category.slug}`}
                      key={`header-category-${category.id}`}
                    >
                      {category.title}
                    </HeaderCategoryLink>
                  ))}
                  <button className="ml-auto sm:hidden" onClick={togleMenuOpened}>
                    <Bars3Icon />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {!isCheckoutPage && (
            <button onClick={toggleCart} id="shopping-cart-item sm:hidden">
              <ShoppingCartSolidIcon className="h-6 w-6 child-path:fill-gray-900" />
            </button>
          )}

          {isLogin ? (
            <UserDropdown />
          ) : (
            !isLoginPage && (
              <Link to="/login">
                <Button size="sm">Війти</Button>
              </Link>
            )
          )}
        </div>
      </div>
      <div className={mobileMenuClasses}>
        <ul>
          <li>
            <Link to="/chekout" className="block w-full border-b py-2" onClick={closeMenu}>
              До корзини
            </Link>
          </li>
          <li>
            <Link to="/login" className="block w-full border-b py-2" onClick={closeMenu}>
              Війти
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
