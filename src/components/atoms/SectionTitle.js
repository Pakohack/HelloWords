import React from 'react';
import cn from 'classnames';

const SectionTitle = ({ title, className }) => {
  const defaultStyles =
    'mx-auto max-w-[calc(100%-40px)] text-[24px] leading-none sm:leading-[32px] font-[800] md-sm:leading-[32px] text-white md-sm:w-[calc(100% - 40px)] lg:text-[40px] leading-[58px]';
  return <h2 className={cn(defaultStyles, className)}>{title}</h2>;
};

export default SectionTitle;
