import { FC } from 'react';
import clsx from 'clsx';
import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

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
  const imageCld = cloudinary.image(image);

  const transformation = ["w_384","h_240","dpr_2.0"]
  if(fitImage) {
    transformation.unshift('c_pad')
  }

  imageCld.addTransformation(transformation.join(','));

  const titleClasses = clsx('text-lg sm:text-xl font-semibold', {
    'mb-2': descriptions,
    'mb-8': !descriptions,
  });

  return (
    <div className="w-72 lg:w-96 shadow-xl rounded-2xl bg-white flex flex-col">
      <div className="relative">
        <AdvancedImage cldImg={imageCld} width={384} height={240} className="rounded-t-2xl"/>
        {weight && (
          <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
            {weight} г
          </span>
        )}
      </div>
      <div className="p-4 sm:p-8 flex flex-col justify-between h-[calc(100%_-_15rem)] flex-1">
        <div>
          <h2 className={titleClasses}>{title}</h2>
          {descriptions && (
            <p className="mb-4 sm:mb-8 text-sm sm:text-base">{descriptions}</p>
          )}
        </div>
        <div className="flex justify-between items-center flex-col gap-3 sm:flex-row">
          <span className="text-xl font-semibold">{price} грн.</span>
        </div>
      </div>
    </div>
  );
};
