import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LOGO_THEME } from '../../settings';

import logoBlue from '../../assets/logo-blue.svg';
import logoWhite from '../../assets/logo-white.svg';

const Logo = ({ className, theme = LOGO_THEME.BLUE }) => {
  const defaultSize = className ? 'w-[111px] h-[33px]' : logoWhite;
  return (
    <Link to="/">
      <img
        src={theme === LOGO_THEME.BLUE ? logoBlue : logoWhite}
        className={cn(defaultSize, className)}
        alt="InstaTV logo"
      />
    </Link>
  );
};

export default Logo;
