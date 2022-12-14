import fishMenu from '@app/db/fish.json';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export const MenuList = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {fishMenu.map(({ image, id, ...fish }) => (
        <MenuItem key={id} {...fish} imagePath={image} />
      ))}
    </div>
  );
};
