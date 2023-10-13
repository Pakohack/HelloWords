import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SocialMediaIcon from '../../atoms/SocialMediaIcon';

import blueQuotes from '../../../assets/blue-quotes.svg';
import arrowToLeft from '../../../assets/arrow-to-left.svg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './carousel.css';

const slides = [
  {
    feedback: `Best Choice I over made. All my favorite channels.`,
    author: `Elsa Gonzalez`,
    from: 'facebook',
  },
  {
    feedback: `I've been having Philo for 2 years, my bill is $35 a month, let we just say this Philo is better than any cable company out there`,
    author: `Sandy M Spring`,
    from: 'facebook',
  },
  {
    feedback: `I have been wing InstaTV for almost a month and it is a great alternative to cable!`,
    author: `@Firelockleather`,
    from: 'instagram',
  },
  {
    feedback: `I've been having InstaTV for 2 years, my bill is $35 a month, let we just say this InstaTV is better than any cable company out there.`,
    author: `Sandy M  Spring`,
    from: 'facebook',
  },
  {
    feedback: `Philo is a keeper. Best value of all the choices in my opinion.`,
    author: `Kathy Dennis Brown`,
    from: 'facebook',
  },
  {
    feedback: `Best Choice I over made. All my favorite channels.`,
    author: `Elsa Gonzalez`,
    from: 'instagram',
  },
];

const BreakUpCarousel = () => {
  return (
    <div className="relative feedbacks-carousel-container max-w-[calc(100%-40px)]">
      <Swiper
        modules={[FreeMode, Navigation]}
        grabCursor={true}
        freeMode={true}
        spaceBetween={30}
        initialSlide={1}
        slidesPerView={1}
        className="feedbacks-slider"
        breakpoints={{
          1930: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {slides.map(({ feedback, author, from }, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[150px] p-[10px] flex flex-col items-start gap-[4px] rounded-[14px] bg-blue-20 w-[304px] lg:w-[336px]">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={blueQuotes}
                alt="blue-quotes-image"
                className="absolute w-[16px] h-[16px]"
              />
              <h5 className="text-white text-left text-[14px] font-middle leading-[22px] mb-[16px] pl-[18px]">
                {feedback}
                <span className="text-blue">"</span>
              </h5>
              <p className="text-white text-left text-[16px] font-semibold leading-[24px] pl-[18px]">
                {`- ${author}`}
              </p>
              <SocialMediaIcon
                socialNetwork={from}
                className={'absolute bottom-[10px] right-[10px]'}
                isResponsible={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev">
        <img src={arrowToLeft} alt="button-prev" />
      </button>
      <button className="swiper-button-next">
        <img src={arrowToLeft} className="rotate-180" alt="button-next" />
      </button>
    </div>
  );
};

export default BreakUpCarousel;
