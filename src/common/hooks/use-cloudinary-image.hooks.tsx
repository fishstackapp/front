import { cloudinary } from '@app/core/cloudinary';

export const useCloudinaryImage = (cloudinaryImage: string, transformations: string[]) => {
  const image = cloudinary.image(cloudinaryImage);

  const transform = [...transformations, 'dpr_2.0'];

  image.addTransformation(transform.join(','));

  return image;
};
