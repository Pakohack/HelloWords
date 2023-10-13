import React from 'react';
import cn from 'classnames';
import { BUTTON_THEME } from '../../settings';

const ActionButton = ({
  theme = BUTTON_THEME.MAIN,
  onClick,
  className,
  label,
  type,
}) => {
  const mainButtonTheme = 'text-white bg-blue lg:leading-[28px]';
  const secondaryButtonTheme =
    'text-blue bg-inherit border-2 border-blue lg:leading-[20px] ';
  return (
    <button
      onClick={onClick && !type && onClick}
      type={type ? type : 'button'}
      className={cn(
        'font-semibold rounded-[28px] transition-transform duration-300 active:translate-y-[1px]',
        theme === BUTTON_THEME.MAIN ? mainButtonTheme : secondaryButtonTheme,
        className,
      )}
    >
      {label}
    </button>
  );
};

export default ActionButton;
