import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { Grid, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import HassleFreeTvVideosGridVideoComponent from '../atoms/HassleFreeTvVideosGridVideoComponent';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';

const HassleFreeTvVideosGrid = ({ videosList }) => {
  const [valueOfVideos, setValueOfVideos] = useState(6);
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 576 });

  useEffect(() => {
    isMobile ? setValueOfVideos(4) : setValueOfVideos(6);
  }, [isMobile]);

  const selectedVideos = videosList.slice(0, valueOfVideos);
  return (
    <div className="h-[319px] max-w-[calc(100%-40px)] xl:max-w-[1136px] mx-[20px]">
      {isTablet ? (
        <Swiper
          slidesPerView={1}
          freeMode={true}
          grid={{
            rows: 2,
          }}
          spaceBetween={20}
          modules={[Grid, FreeMode]}
          className="video-grid-swiper"
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
          }}
        >
          {videosList.map(({ id }) => (
            <SwiperSlide key={id} className="video-grid-slider">
              <HassleFreeTvVideosGridVideoComponent
                key={id}
                className={'w-[200px] h-[120px]'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={cn(
            'video-grid-container h-full grid gap-[12px] relative z-1',
            isMobile ? 'grid-cols-2' : 'grid-cols-3',
          )}
        >
          {selectedVideos.map(({ id }) => (
            <HassleFreeTvVideosGridVideoComponent key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HassleFreeTvVideosGrid;
