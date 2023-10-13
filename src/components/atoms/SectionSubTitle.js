import React from 'react';
import cn from 'classnames';

const SectionSubTitle = ({ subTitle, className }) => {
  const defaultStyles =
    'text-white-80 text-[14px] lg:text-[18px] font-semibold leading-[22px] lg:leading-[26px]';
  return <h2 className={cn(defaultStyles, className)}>{subTitle}</h2>;
};

export default SectionSubTitle;
