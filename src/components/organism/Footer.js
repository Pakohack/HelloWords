import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import SocialMediasList from '../molecules/SocialMediasList';
import { NAVIGATION_THEME } from '../../settings';

const footerWarning =
  'Do Not Sell / Share My Personal Information / Otp-Out of Targeted Advertising';

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <footer className="pt-[70px] lg:pt-[100px] max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px] mx-auto">
      <div className="flex gap-[21px] flex-col lg-sm:flex-row justify-between items-center mb-[32px] lg:mb-[28px]">
        <Logo />
        {isDesktop && <Navigation theme={NAVIGATION_THEME.MAIN} />}
        <SocialMediasList />
      </div>
      {!isDesktop && (
        <Navigation theme={NAVIGATION_THEME.MAIN} className="mb-[24px]" />
      )}
      <Navigation theme={NAVIGATION_THEME.SECONDARY} className="flex-wrap" />
      <p className="py-[40px] text-white-60 text-[14px] font-semibold leading-[20px]">
        {footerWarning}
      </p>
    </footer>
  );
};

export default Footer;
