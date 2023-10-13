import React from 'react';
import StreamAnytimeGridItem from '../atoms/StreamAnytimeGridItem';
import { useMediaQuery } from 'react-responsive';
import SectionTitle from '../atoms/SectionTitle';
import SectionSubTitle from '../atoms/SectionSubTitle';

import platformAmazonFireTvDesktop from '../../assets/platforms/amazonfiretv-logo-desktop.svg';
import platformAndroidDesktop from '../../assets/platforms/android-logo-desktop.svg';
import platformAndroidTvDesktop from '../../assets/platforms/androidtv-logo-desktop.svg';
import platformAppleTvDesktop from '../../assets/platforms/appletv-logo-desktop.svg';
import platformGoogleDesktop from '../../assets/platforms/google-logo-desktop.svg';
import platformIosDesktop from '../../assets/platforms/ios-logo-desktop.svg';
import platformRokuDesktop from '../../assets/platforms/roku-logo-desktop.svg';
import platformSamsungDesktop from '../../assets/platforms/samsung-logo-desktop.svg';
import platformFireDesktop from '../../assets/platforms/fire-logo-desktop.svg';
import platformAmazonFireTvMobile from '../../assets/platforms/amazonfiretv-logo-mobile.svg';
import platformAndroidMobile from '../../assets/platforms/android-logo-mobile.svg';
import platformAndroidTvMobile from '../../assets/platforms/androidtv-logo-mobile.svg';
import platformAppleTvMobile from '../../assets/platforms/appletv-logo-mobile.svg';
import platformGoogleMobile from '../../assets/platforms/google-logo-mobile.svg';
import platformIosMobile from '../../assets/platforms/ios-logo-mobile.svg';
import platformRokuMobile from '../../assets/platforms/roku-logo-mobile.svg';
import platformSamsungMobile from '../../assets/platforms/samsung-logo-mobile.svg';
import platformFireMobile from '../../assets/platforms/fire-logo-mobile.svg';
import mockImageDesktop from '../../assets/stream-anytime-mock-desktop.png';
import mockImageSm from '../../assets/stream-anytime-mock-sm.png';

const title = `Stream anytime, anywhere`;
const subTitle =
  'Watch InstaTV at home or on-the-go with your TV, phone, laptop, or tablet.';

const StreamAnytime = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const listOfPlatforms = [
    {
      id: '1',
      img: isDesktop ? platformAndroidTvDesktop : platformAndroidTvMobile,
      name: 'Android TV',
    },
    {
      id: '2',
      img: isDesktop ? platformAndroidDesktop : platformAndroidMobile,
      name: 'Android',
    },
    {
      id: '3',
      img: isDesktop ? platformAppleTvDesktop : platformAppleTvMobile,
      name: 'Apple TV',
    },
    {
      id: '4',
      img: isDesktop ? platformAmazonFireTvDesktop : platformAmazonFireTvMobile,
      name: 'Amazon Fire TV',
    },
    {
      id: '5',
      img: isDesktop ? platformFireDesktop : platformFireMobile,
      name: 'Fire',
    },
    {
      id: '6',
      img: isDesktop ? platformIosDesktop : platformIosMobile,
      name: 'IOS',
    },
    {
      id: '7',
      img: isDesktop ? platformRokuDesktop : platformRokuMobile,
      name: 'Roku',
    },
    {
      id: '8',
      img: isDesktop ? platformSamsungDesktop : platformSamsungMobile,
      name: 'Samsung',
    },
    {
      id: '9',
      img: isDesktop ? platformGoogleDesktop : platformGoogleMobile,
      name: 'Google',
    },
  ];

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
      <div className="flex flex-col-reverse lg-sm:flex-row justify-center lg:justify-start items-center gap-[32px] lg-sm:gap-[42px] lg:gap-[166px] h-full lg-sm:h-[192px] lg:h-[400px] max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px] mx-auto relative">
        <div className="flex flex-wrap  justify-center lg-sm:grid max-w-full grid-cols-3 gap-[12px] lg:gap-[20px] lg-sm:py-[10px]">
          {listOfPlatforms.map(({ id, img, name }) => (
            <StreamAnytimeGridItem key={id} id={id} img={img} name={name} />
          ))}
        </div>
        {isDesktop ? (
          <img
            src={mockImageDesktop}
            alt={'mock-devices'}
            className="w-[602px] xl:w-[808px] absolute right-0 top-[calc(50%-150px)] xl:top-0 xl:right-[-166px]"
          />
        ) : (
          <img
            src={mockImageSm}
            alt={'mock-devices'}
            className="max-w-full lg-sm:w-[316px] h-[176px]"
          />
        )}
      </div>
    </section>
  );
};

export default StreamAnytime;
