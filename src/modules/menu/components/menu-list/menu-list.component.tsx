import { FC } from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { Menu, useGetSettingQuery } from '@app/core/types';

interface MenuListProps {
  items: Menu[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  const {data: settings} = useGetSettingQuery({fetchPolicy: "cache-only"})
  return (
    <div className="flex flex-wrap gap-10 grid-cols-3 justify-center">
      {items.map(({ image, ...fish }) => (
        <MenuItem {...fish} image={image} key={`fish-${fish.id}`} fitImage={fish.category_id === settings?.settings[0].snacks_categoty}/>
      ))}
    </div>
  );
};
