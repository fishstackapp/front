import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  footer?: boolean;
}

export const Logo: FC<PropsWithChildren<LogoProps>> = ({footer}) => {
  const classes = clsx("text-s font-semibold sm:text-xl", {
    "text-white text-xl": footer,
  })

  return (
    <div>
      <Link to="/" className={classes}>
        🐟 <span className='text-blue-500'>Fish</span>Stack
      </Link>
    </div>
  );
};
