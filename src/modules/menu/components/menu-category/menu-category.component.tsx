import { Categories } from "@app/core/types";
import { FC } from "react";
import { MenuList } from "../menu-list/menu-list.component";

interface MenuCategoryProps {
  data: Categories;
}

export const MenuCategory:FC<MenuCategoryProps> = ({data}) => {
  return (
    <div className="w-full flex flex-col gap-12" id={data.slug}>
      <div className="flex flex-col gap-1 items-center">
        <h2 className="relative font-bold text-2xl after:content-[''] after:block after:absolute after:w-full after:bg-blue-400 after:h-1">
          {data.title}
        </h2>
      </div>
      <MenuList items={data.menu_items}/>
    </div>
  )
}