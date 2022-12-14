import { FC } from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { Fish } from '../../types/fish';

interface MenuListProps {
  items: Fish[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 grid-cols-3 justify-center">
      {items.map(({ image, id, ...fish }) => (
        <MenuItem key={id} {...fish} imagePath={image} />
      ))}
    </div>
  );
};
