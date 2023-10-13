import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/actions/popUp';
import ActionButton from '../atoms/ActionButton';
import Header from '../molecules/Header';
import HeroCarousel from '../molecules/carousel/HeroCarousel';

const MainHero = () => {
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  return (
    <main className="relative lg:bg-carouselBg bg-no-repeat custom-bg-position">
      <Header />
      <p className="text-white-80 text-[14px] leading-[22px] font-semibold lg:text-[18px] lg:leading-[26px] mb-[12px] sm:mb-[6px] lg:mb-[12px]">
        No hidden fees. Cancel anytime.
      </p>
      <h1 className="mx-auto text-white mb-[42px] sm:mb-[26px] lg:mb-[42px] text-[34px] max-w-full px-[20px] sm:max-w-[445px] md-sm:px-[0] leading-[42px] lg:text-[64px] font-[800] lg:leading-[72px] lg:max-w-[959px]">
        Shows, movies, and 250+ live channels. 35$/month.
      </h1>
      <ActionButton
        onClick={handleOpenPopup}
        className="w-[calc(100%-40px)] md-sm:w-[350px] h-[48px] lg:h-[56px] mb-[16px] text-[16px] leading-[24px] lg:text-[18px]"
        label="Start your 7-days free trial"
      />
      {/* TODO: fix path here */}
      <Link
        to="/"
        className="text-white-80 block text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mb-[32px] lg:mb-[42px]"
      >
        I have a redemption code
      </Link>
      <HeroCarousel />
    </main>
  );
};

export default MainHero;
