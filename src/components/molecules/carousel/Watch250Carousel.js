import React from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import './carousel.css';

const Watch250Carousel = ({ listOfImages }) => {
  return (
    <div className="h-[81px] w-[335px] lg-sm:w-[525px] lg:w-[564px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        centeredSlides={false}
        grabCursor={true}
        breakpoints={{
          576: {
            slidesPerView: 6,
          },
        }}
        modules={[FreeMode]}
      >
        {listOfImages.map(({ id, src }, index) => (
          <SwiperSlide key={id}>
            <img
              src={src}
              alt={`element-of-list-${index}`}
              width={84}
              className="w-[84px] h-[81px] rounded-[12px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Watch250Carousel;
