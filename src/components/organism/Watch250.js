import React from 'react';
import Watch250ChannelLogosList from '../molecules/Watch250ChannelLogosList';
import SectionTitle from '../atoms/SectionTitle';
import SectionSubTitle from '../atoms/SectionSubTitle';
import Watch250RightPart from '../molecules/Watch250RightPart';

import mock1 from '../../assets/watch-250/mock-1.png';
import mock2 from '../../assets/watch-250/mock-2.png';
import mock3 from '../../assets/watch-250/mock-3.png';
import mock4 from '../../assets/watch-250/mock-4.png';
import mock5 from '../../assets/watch-250/mock-5.png';
import mock6 from '../../assets/watch-250/mock-6.png';

const listOfImages = [
  { id: '1', src: mock1 },
  { id: '2', src: mock2 },
  { id: '3', src: mock3 },
  { id: '4', src: mock4 },
  { id: '5', src: mock5 },
  { id: '6', src: mock6 },
  { id: '7', src: mock1 },
];
const title = `Watch 250+ channels on InstaTV`;
const subTitle =
  'Search for your favorite channels and get to the good stuff faster.';
const videoId = 'JCDXYJB59HA';

const Watch250Section = () => {
  return (
    <section className="mb-[70px] sm:mb-[60px] lg:mb-[86px]">
      <SectionTitle
        title={title}
        className={'mb-[14px] sm:mb-[10px] lg:mb-[12px]'}
      />
      <SectionSubTitle
        subTitle={subTitle}
        className={'mb-[32px] lg:mb-[60px]'}
      />
      <div className="mx-auto flex flex-col justify-center items-center gap-[42px] lg:gap-[60px] lg:flex-row max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px]">
        <Watch250ChannelLogosList />
        <Watch250RightPart videoId={videoId} listOfImages={listOfImages} />
      </div>
    </section>
  );
};

export default Watch250Section;
