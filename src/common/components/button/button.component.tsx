import clsx from 'clsx';
import { ComponentProps, FC, PropsWithChildren } from 'react';

enum ButtonSize {
  sm = 'sm',
  base = 'base',
}

enum ButtonVariant {
  primary = 'primary',
  danger = 'danger',
}

interface ButtonProps {
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: ComponentProps<'button'>['type'];
  onClick?: ComponentProps<'button'>['onClick'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = ButtonSize.base,
  variant = ButtonVariant.primary,
  fullWidth = false,
  disabled,
  ...props
}) => {
  const buttonClasses = clsx('flex items-center justify-center gap-1 text-sm text-gray-900 px-4 border rounded-md transition-all', {
    'w-full': fullWidth,
    'py-1.5': size === ButtonSize.base,
    'py-0.5': size === ButtonSize.sm,
    'opacity-50 cursor-not-allowed': disabled,
    'bg-blue-400 border-blue-400 hover:bg-blue-500 hover:border-blue-500 disabled:hover:border-blue-400 disabled:hover:bg-blue-400 text-white':
      variant === ButtonVariant.primary,
    'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500 disabled:hover:border-red-400 disabled:hover:bg-red-400':
      variant === ButtonVariant.danger,
  });

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
