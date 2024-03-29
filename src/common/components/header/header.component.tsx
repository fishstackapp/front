import { FC, useState } from 'react';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { Button } from '../button/button.component';
import { Skeleton } from '../skeleton/skeleton.component';
import { Link, useLocation } from 'react-router-dom';
import { HeaderCategoryLink } from '../header-link/header-link.component';
import { toggleCart } from '@app/modules/cart/store/cart-opened-state';
import { ReactComponent as ShoppingCartSolidIcon } from '@app/assets/icons/shopping-cart-solid.svg';
import { ReactComponent as Bars3Icon } from '@app/assets/icons/bars-3.svg';
import { ReactComponent as XIcon } from '@app/assets/icons/x-mark-solid.svg';
import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';
import { MobileMenu } from '../mobile-menu/mobile-menu.component';
import { Logo } from '../logo/logo.component';
import { ReactClock } from '../react-clock/react-clock.component';
import { Badge } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { cartState } from '@app/modules/cart/store/cart-state';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const cartItems = useReactiveVar(cartState);
  const { isLoggedin } = useAuthState();

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isCheckoutPage = location.pathname === '/checkout';

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const togleMenuOpened = () => setIsMenuOpened(p => !p);

  return (
    <header>
      <div className="fixed z-20 mb-6 flex h-12 w-full items-center justify-between bg-white px-2 shadow sm:mb-12 sm:px-6">
        <div className="flex h-full flex-1 items-center gap-3">
          <Logo />
          <div className="h-6 w-px bg-gray-200" />
          {isLoading ? (
            <>
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
            </>
          ) : (
            <>
              {isHomePage && !isMenuOpened && (
                <div className="flex flex-1 items-center gap-3">
                  {categories?.map(category => (
                    <HeaderCategoryLink
                      url={`#${category.slug}`}
                      key={`header-category-${category.id}`}
                    >
                      {category.title}
                    </HeaderCategoryLink>
                  ))}
                </div>
              )}
              {!isHomePage && !isMenuOpened && (
                <div className="relative text-sm font-semibold after:absolute after:block after:h-px after:w-full after:content-[''] hover:after:bg-blue-400 sm:text-base">
                  <Link to="/">Головна</Link>
                </div>
              )}
              {isMenuOpened && <ReactClock />}

              {isMenuOpened || isCheckoutPage ? (
                <button aria-label="Bars" className="ml-auto sm:hidden" onClick={togleMenuOpened}>
                  <XIcon width={20} height={20}/>
                </button>
              ) : (
                <button aria-label="Bars" className="ml-auto sm:hidden" onClick={togleMenuOpened}>
                  <Badge badgeContent={Object.keys(cartItems).length} color="info">
                    <Bars3Icon />
                  </Badge>
                </button>
              )}
            </>
          )}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {!isCheckoutPage && (
            <button
              className="relative"
              aria-label="Shopping cart"
              onClick={toggleCart}
              id="shopping-cart-item sm:hidden"
            >
              <Badge badgeContent={Object.keys(cartItems).length} color="info">
                <ShoppingCartSolidIcon className="h-6 w-6 child-path:fill-gray-900" />
              </Badge>
            </button>
          )}

          {isLoggedin ? (
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
      <MobileMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    </header>
  );
};
