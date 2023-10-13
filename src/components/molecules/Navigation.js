import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { NAVIGATION_THEME } from '../../settings';

const Navigation = ({ theme, className }) => {
  // TODO: add refs
  const navigationList =
    theme === NAVIGATION_THEME.MAIN
      ? [
          { id: '1', label: 'Help', href: '#' },
          { id: '2', label: 'About', href: '#' },
          { id: '3', label: 'Press', href: '#' },
          { id: '4', label: 'Blog', href: '#' },
          { id: '5', label: 'Jobs', href: '#' },
        ]
      : [
          { id: '1', label: 'Terms', href: '#' },
          { id: '2', label: 'Privacy', href: '#' },
          { id: '3', label: 'Ad Choices', href: '#' },
          { id: '4', label: 'Nielsen TV Rating Measurement', href: '#' },
          { id: '5', label: 'Accessibility', href: '#' },
        ];

  const navigationMain =
    'flex justify-between md-sm:justify-center md-sm:gap-[32px] lg:gap-[60px] justify-center text-white text-[16px] font-semibold leading-[24px]';
  const navigationSecondary =
    'flex gap-[20px] md-sm:gap-[32px] lg:gap-[40px] justify-center pb-[32px] lg:pb-[100px] text-white-60 text-[14px] font-semibold leading-[20px] border-b border-blue-20';

  return (
    <nav
      className={cn(
        theme === NAVIGATION_THEME.MAIN ? navigationMain : navigationSecondary,
        className,
      )}
    >
      {navigationList.map(({ id, label, href }) => (
        <Link to={href} key={id}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
