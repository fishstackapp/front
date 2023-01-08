import { FC } from 'react';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { Button } from '../button/button.component';
import { Skeleton } from '../skeleton/skeleton.component';
import { Link } from 'react-router-dom';
import { HeaderCategoryLink } from '../link/link.component';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items'>[];
  isLoggin?: boolean;
}

export const Header: FC<HeaderProps> = ({ isLoading, categories, isLoggin }) => {
  return (
    <div className="h-12 shadow px-6 mb-6 sm:mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3 flex-1">
        <a href="/" className="text-lg font-semibold sm:text-xl">
          🐟 FishStack
        </a>
        <div className="w-px bg-gray-200 h-6" />
        {isLoading ? (
          <>
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
            {categories?.map(category => (
              <HeaderCategoryLink url={`#${category.slug}`} key={`header-category-${category.id}`}>
                {category.title}
              </HeaderCategoryLink>
            ))}
          </>
        )}
      </div>
      <div>
        {isLoggin ? (
          <UserDropdown />
        ) : (
          <Link to="/login">
            <Button size="sm">Війти</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
