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

  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3">
        <Link to="/" className="text-xl font-semibold">
          🐟 FishStack
        </Link>
        {isLoading ? (
          <>
            <div className="w-px bg-gray-200 h-6" />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
            {showCategories && (
              <>
                <div className="w-px bg-gray-200 h-6" />
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
      <div className='flex items-center gap-3'>
      <button onClick={toggleCart}>
        <ShoppingCartSolidIcon className='w-6 h-6 child-path:fill-gray-900' />
      </button>
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
