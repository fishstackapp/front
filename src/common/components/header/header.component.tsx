import { Categories } from "@app/core/types";
import { FC } from "react";
import { Link } from "../link/link.component";
import { Skeleton } from "../skeleton/skeleton.component";

interface HeaderProps {
  isLoading?: boolean,
  categories?: Omit<Categories, 'menu_items'>[],
}

export const Header:FC<HeaderProps> = ({isLoading, categories}) => {
  return (
    <div className="h-12 shadow px-6 mb-6 sm:mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3 flex-1">
        <a href="/" className="text-lg font-semibold sm:text-xl">
          🐟 FishStack
        </a>
        <div className="w-px bg-gray-200 h-6"/>
        {isLoading ? (
          <>
            <Skeleton width={34} height={19}/>
            <Skeleton width={34} height={19}/>
            <Skeleton width={34} height={19}/>
            <Skeleton width={34} height={19}/>
          </>
        ) : (
          <>
            {categories?.map((category) => (
              <Link url={`#${category.slug}`} key={`header-category-${category.id}`}>{category.title}</Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
