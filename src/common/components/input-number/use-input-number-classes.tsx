import clsx from 'clsx';
import { InputNumberSize } from './input-number.types';

export const useInputClasses = (
  isFocused?: boolean,
  size?: keyof typeof InputNumberSize,
  error?: string,
  fullWidth?: boolean,
  hideErrorMessage?: boolean,
) => {
  const inputClasses = clsx(
    'border shadow-sm bg-white rounded-md text-sm placeholder-gray-400 outline-none transition-all',
    {
      'py-2 px-15': size === InputNumberSize.base,
      'pr-20' : size === InputNumberSize.base && !hideErrorMessage,
      'py-0.5 px-9': size === InputNumberSize.sm,
      'pr-14' : size === InputNumberSize.sm && !hideErrorMessage,
      'border-gray-300': !error,
      'border-red-300 text-red-900 focus:border-red-500': error,
      'w-full': fullWidth,
    }
  );

  const inputWrapperClasses = clsx('relative inline-block', { 'w-full': fullWidth });

  const commonButtonsClasses = {
    'absolute top-px transition': true,
    'h-9 w-9 ': size === InputNumberSize.base,
    'h-6 w-6 ': size === InputNumberSize.sm,
    'border-gray-300': !error,
    'border-red-300': error && !isFocused,
    'border-red-500': error && isFocused,
  };

  const buttonMinusClasses = clsx('border-r', commonButtonsClasses);

  const buttonPlusClasses = clsx('border-l right-0', commonButtonsClasses);

  const buttonIconsClasses = clsx('mx-auto transition-all', {
    'w-3 h-3': size === InputNumberSize.sm,
    'child-path:stroke-gray-400': !error,
    'child-path:stroke-red-300': error && !isFocused,
    'child-path:stroke-red-500': error && isFocused,
  });

  const errorMarkClasses = clsx('absolute h-4 w-4 child-path:fill-red-500', {
    'top-2.75 right-12': size === InputNumberSize.base,
    'top-1.25 right-8': size === InputNumberSize.sm,
  });

  return {
    inputClasses,
    inputWrapperClasses,
    buttonMinusClasses,
    buttonPlusClasses,
    buttonIconsClasses,
    errorMarkClasses,
  };
};
