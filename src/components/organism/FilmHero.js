import React, { useState } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { LOGO_THEME } from '../../settings';

import SeeMoreButton from '../atoms/SeeMore';
import ActionButton from '../atoms/ActionButton';
import Header from '../molecules/Header';

import mockMtvLogo from '../../assets/__mock-film-hero/mock-mtv-logo.svg';
import mockFilmDesktop from '../../assets/__mock-film-hero/mock-film-hero-desktop.png';
import mockFilmMobile from '../../assets/__mock-film-hero/mock-film-hero-mobile.png';
import Logo from '../atoms/Logo';

const title = 'The Hills: New Beginnings';
const description = `Based on the series "The Hills,” "The Hills: New Beginnings” reunites the original cast members and adds some new faces to blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah`;
const starring = [
  'Audrina Patridge',
  'Brody Jenner',
  'Frankie Delgado',
  'Heidi Pratt',
  'Jason Wahler',
];
const genres = ['Reality'];

const renderItemsOfContent = array => {
  return (
    <>
      {array.map((el, index) =>
        index === array.length - 1 ? (
          <span className="text-white-80">{el}</span>
        ) : (
          <span className="text-white-80">{el}, </span>
        ),
      )}
    </>
  );
};

const FilmHero = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isExpandedDescription, setIsExpandedDescription] = useState(false);

  // TODO: ADD START TRIAL
  const startTrial = () => {
    console.log('START TRIAL will be soon');
  };

  // TODO: ADD New Episodes
  const handleNewEpisodes = () => console.log('New episodes will be soon');

  const handleExpand = () => {
    setIsExpandedDescription(!isExpandedDescription);
  };

  return (
    <main className="film-page-hero h-[994px] w-screen bg-background overflow-hidden">
      <div className="relative z-10">
        <Header logoTheme={LOGO_THEME.WHITE} />
        <div className="flex flex-col items-center gap-[36px] lg-sm:gap-[32px] lg:flex-row max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1368px] mx-auto mt-[60px] md:sm-mt-[63px] lg:mt-[192px] relative">
          <div className="flex flex-col items-start text-left max-w-full md:max-w-[576px] lg:max-w-[513px]">
            <div className="flex gap-[12px] mb-[14px] lg:mb-[12px]">
              <ActionButton
                label="New episodes"
                onClick={handleNewEpisodes}
                className="w-[106px] h-[32px] text-[12px] leading-[20px] lg:text-[14px] lg:leading-[22px] lg:h-[34px] lg:w-[120px]"
              />
              {/* TODO: fix this hard-code */}
              <div className="text-white text-[12px] font-semibold leading-[20px] lg:text-[14px] lg:leading-[22px] w-[66px] height-[32px] lg:w-[72px] h-[34px] bg-white-8 rounded-[28px] flex justify-center items-center">
                TV - 14
              </div>
              <div className="flex justify-center items-center rounded-[28px] bg-white-8 w-[73px] h-[32px] lg:h-[34px]">
                <img src={mockMtvLogo} alt="mock-logo" />
              </div>
            </div>
            <h2 className="text-white text-[24px] leading-[32px] lg:text-[40px] lg:leading-[58px] font-[800] mb-[11px] lg:mb-[21px]">
              {title}
            </h2>
            <p
              className={cn(
                'text-white-80 font-[400] text-[16px] leading-[18px] lg:leading-[20px] pt-[5px] mb-[8px] lg:mb-[12px]',
                isExpandedDescription
                  ? 'h-full'
                  : 'h-[54px] md-sm:h-[36px] lg:h-[40px] truncate whitespace-pre w-[calc(100%-40px)] lg:w-[500px]',
              )}
            >
              {description}
            </p>
            <SeeMoreButton
              isActive={isExpandedDescription}
              onClick={handleExpand}
            />
            <p className="text-[16px] leading-[24px] mt-[26px] lg:mt-[22px]">
              <span className="text-white font-semibold">Starring: </span>
              {renderItemsOfContent(starring)}
            </p>
            <p className="text-[16px] leading-[24px] mt-[22px]">
              <span className="text-white font-semibold">Genre: </span>
              {renderItemsOfContent(genres)}
            </p>
          </div>
          <img
            src={isMobile ? mockFilmMobile : mockFilmDesktop}
            alt={`film's highlights on differed devices`}
            className="static lg:absolute right-0 w-full md-sm:w-[387px] md-sm:h-[262px] lg-sm:w-[502px] lg-sm:h-[339px] lg:top-[-10px] xl:w-[783px] xl:h-[529px] xl:top-[-32px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-[22px] mx-auto lg:max-w-[1024px] xl:max-w-[1248px] mt-[40px] lg:mt-[150px] xl:mt-[290px] justify-between items-center">
          <Logo />
          <p className="text-white text-[14px] leading-[22px] lg:text-[16px] font-semibold lg:leading-[24px] max-w-[308px] lg:max-w-[317px]">
            Stream 70+ live channels and 70,000+ titles on-demand - just
            $35/month.
          </p>
          <ActionButton
            onClick={startTrial}
            className="w-[calc(100%-40px)] md-sm:w-[320px] h-[48px] lg:h-[44px] lg:w-[240px]  text-[16px] leading-[24px]"
            label="Start your 7-days free trial"
          />
        </div>
      </div>
    </main>
  );
};

export default FilmHero;
