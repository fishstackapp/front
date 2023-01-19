import { FC } from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { Menu, useGetSettingQuery } from '@app/core/types';

interface MenuListProps {
  items: Menu[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  const { data: settings } = useGetSettingQuery({ fetchPolicy: 'cache-only' });
  return (
    <div className="flex grid-cols-3 flex-wrap justify-center gap-10">
      {items.map(({ image, ...fish }) => (
        <MenuItem
          {...fish}
          fishId={fish.id}
          image={image}
          key={`fish-${fish.id}`}
          fitImage={fish.category_id === settings?.settings[0].snacks_category}
        />
      ))}
    </div>
  );
};
