import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface FooterAboutUsProps {
  to: string;
}

export const FooterAboutUs: FC<FooterAboutUsProps & PropsWithChildren> = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">{children}</Link>
    </li>
  );
};
