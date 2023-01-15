import { FC } from 'react';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { Button } from '../button/button.component';
import { Skeleton } from '../skeleton/skeleton.component';
import { Link, useLocation } from 'react-router-dom';
import { HeaderCategoryLink } from '../link/link.component';
import { useReactiveVar } from '@apollo/client';
import { isLoginReactive } from '@app/modules/auth/store/reactive-vars';
import { ReactComponent as ShoppingCartSolidIcon } from '@app/assets/icons/shopping-cart-solid.svg';
import { toggleCart } from '@app/modules/cart/store/cart-opened-state';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const isLogin = useReactiveVar(isLoginReactive);
  const location = useLocation();
  const showCategories = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <div className="fixed z-20 mb-12 flex h-12 w-full items-center justify-between bg-white px-6 shadow">
      <div className="flex h-full items-center gap-3">
        <Link to="/" className="text-xl font-semibold">
          🐟 FishStack
        </Link>
        {isLoading ? (
          <>
            <div className="h-6 w-px bg-gray-200" />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
            {showCategories && (
              <>
                <div className="h-6 w-px bg-gray-200" />
                {categories?.map(category => (
                  <HeaderCategoryLink
                    url={`#${category.slug}`}
                    key={`header-category-${category.id}`}
                  >
                    {category.title}
                  </HeaderCategoryLink>
                ))}
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        {!isCheckoutPage && (
          <button onClick={toggleCart} id="shopping-cart-item">
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
  );
};
