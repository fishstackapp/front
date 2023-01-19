import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface UserDropdownLinkProps {
  to?: ComponentProps<typeof Link>['to'];
  onClick?: ComponentProps<typeof Link>['onClick'];
}

export const UserDropdownLink: FC<PropsWithChildren<UserDropdownLinkProps>> = ({
  children,
  to = '',
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className="block h-9 px-4 flex items-center text-sm transition-all hover:bg-gray-100"
    >
      {children}
    </Link>
  );
};
