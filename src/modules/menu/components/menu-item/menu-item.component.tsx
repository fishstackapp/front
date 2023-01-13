import { FC } from 'react';
import clsx from 'clsx';

import { AdvancedImage } from '@cloudinary/react';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hooks';
import { Button } from '@app/common/components/button/button.component';

interface MenuItemProps {
  image: string;
  title: string;
  weight?: number;
  descriptions?: string | null;
  price: number;
  fitImage?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
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

  return (
    <div className="w-96 rounded-2xl bg-white shadow-xl">
      <div className="relative">
        <AdvancedImage cldImg={imageCld} width={384} height={240} className="rounded-t-2xl" />
        {weight && (
          <span className="absolute bottom-1.5 right-3 rounded-[2rem] bg-gray-900/50 px-2 text-sm text-white">
            {weight} г
          </span>
        )}
      </div>
      <div className="p-8">
        <h2 className={titleClasses}>{title}</h2>
        {descriptions && <p className="mb-8">{descriptions}</p>}
        <div className='flex justify-between items-center'>         
        <span className="text-xl font-semibold">{price} грн.</span>
        <Button>
          Додати до кошика
        </Button>
        </div>
      </div>
    </div>
  );
};
