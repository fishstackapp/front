import { FC, PropsWithChildren, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterAboutUsProps {
  to: string;
}

export const FooterAboutUs: FC<FooterAboutUsProps & PropsWithChildren> = ({ to, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <li>
      <Link to={to} className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">{children}</Link>
    </li>
  );
};
