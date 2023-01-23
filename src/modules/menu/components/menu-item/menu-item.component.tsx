import { FC } from 'react';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { AdvancedImage } from '@cloudinary/react';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hooks';
import { Button } from '@app/common/components/button/button.component';
import { addItemsToCart } from '@app/modules/cart/store/cart-state';

interface MenuItemProps {
  fishId: string;
  image: string;
  title: string;
  price: number;
  weight?: number;
  descriptions?: string | null;
  fitImage?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  fishId,
  image,
  weight,
  title,
  descriptions,
  price,
  fitImage = false,
}) => {
  const transformation = ['w_384', 'h_240'];

  if (fitImage) {
    transformation.unshift('c_pad');
  }

  const imageCld = useCloudinaryImage(image, transformation);

  const titleClasses = clsx('text-lg sm:text-xl font-semibold', {
    'mb-2': descriptions,
    'mb-8': !descriptions,
  });

  const handleAddToCart = () => {
    addItemsToCart(fishId);

    toast.success(`${title} додано до корзини`)
  };

  return (
    <div className="w-72 lg:w-96 rounded-2xl bg-white shadow-xl flex flex-col">
      <div className="relative">
        <AdvancedImage cldImg={imageCld} width={384} height={240} className="rounded-t-2xl" />
        {weight && (
          <span className="absolute bottom-1.5 right-3 rounded-[2rem] bg-gray-900/50 px-2 text-sm text-white">
            {weight} г
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 sm:p-8 h-[calc(100%_-_15rem)]">
        <div>
          <h2 className={titleClasses}>{title}</h2>
          {descriptions && <p className="mb-4 sm:mb-8 text-sm sm:text-base">{descriptions}</p>}
        </div>
        <div className="flex items-center justify-between flex-col gap-3 sm:flex-row">
          <span className="text-xl font-semibold w-full sm:w-1/2 ">{price} грн.</span>
          <Button onClick={handleAddToCart}>Додати до кошика</Button>
        </div>
      </div>
    </div>
  );
};
