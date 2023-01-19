import clsx from 'clsx';
import { FC } from 'react';

interface SkeletonProps {
  width: number;
  height: number;
  roundedFull?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({ width, height, roundedFull = true }) => {
  const classes = clsx('bg-gray-200 animate-pulse', {
    'rounded-full': roundedFull,
    'rounded-md': !roundedFull,
  });

  return <div className={classes} style={{ width, height }} />;
};
