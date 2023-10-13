import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import mock1 from '../../../assets/hero-carousel/mock-1.png';
import mock2 from '../../../assets/hero-carousel/mock-2.png';
import mock3 from '../../../assets//hero-carousel/mock-3.png';

import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';

const slides = [mock1, mock2, mock3];

const HeroCarousel = () => {
  return (
    <div className="mb-[63px] h-189px sm:mb-[50px] lg:mb-[86px] sm:h-[189px] md-sm:h-[263px] lg:h-[536px] relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        initialSlide={1}
        centeredSlides={true}
        grabCursor={true}
        className="hero-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <img
              src={slide}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
