import React, { useState } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BreakUpPlanGridItem from '../atoms/BreakUpPlanGridItem';

import monthlyPrice from '../../assets/plan/monthly-price.svg';
import dvr from '../../assets/plan/dvr.svg';
import freeTrial from '../../assets/plan/free-trial.svg';
import channels from '../../assets/plan/channels.svg';

import 'swiper/css';
import 'swiper/css/free-mode';

const planGridLabels = [
  { id: '0' },
  { id: '1', img: monthlyPrice, title: 'Monthly price' },
  { id: '2', img: freeTrial, title: 'Free trial' },
  { id: '3', img: channels, title: 'Channels' },
  { id: '4', img: dvr, title: 'DVR' },
];

const items = [
  {
    price: '<span class="text-white">$35</span>',
    trial: 'Yes, 7 days FREE',
    channels: '250+',
    dvr: 'Yes, unlimited Included<sup class="text-[12px] mt-[5px] font-medium">3</sup>',
  },
  {
    label:
      'Spectrum</br><span class="text-white-80, text-[12px]">(Select plan)</span>',
    price: `$107<sup class="text-[12px] mt-[12px]">1</sup>`,
    trial: 'No',
    channels: '350+',
    dvr: '<span class="font-medium">Extra Free</span>',
  },
  {
    label:
      'xfinity</br><span class="text-white-80, text-[12px] font-medium">(Standart TV plan)</span>',
    price: '$123<sup class="text-[12px] mt-[12px]">2</sup>',
    trial: '<span class="font-medium">No</span>',
    channels: '350+',
    dvr: '<span class="font-medium">20 hours</span>',
  },
];

const PlanGrid = () => {
  const [selectedItemId, setSelectedItemId] = useState(0);

  const handleSelect = id => {
    setSelectedItemId(id);
  };

  return (
    <div className="mx-auto relative mb-[26px] lg:mb-[32px] max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px]">
      <div className="plan-board">
        {planGridLabels.map(({ id, img, title }) => (
          <div
            key={id}
            className="plan-board-label items-center justify-start py-[40px] px-[10px] gap-[12px] h-[104px] hidden lg:flex"
          >
            {img && title && (
              <>
                <img src={img} alt={`icon-${title}`} />
                <h4 className="text-white text-[22px] text-semibold leading-[20px]">
                  {title}
                </h4>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-center static lg:absolute top-0 left-[278px] h-full lg:gap-[10px] xl:gap-[70px] lg:overflow-hidden">
        {items.map(({ label, price, trial, channels, dvr }, index) => (
          <BreakUpPlanGridItem
            key={index}
            id={index}
            label={label}
            price={price}
            trial={trial}
            channels={channels}
            dvr={dvr}
            selected={selectedItemId}
            onClick={handleSelect}
            planGridLabels={planGridLabels}
          />
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          centeredSlides={false}
          breakpoints={{
            650: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode]}
        >
          {items.map(({ label, price, trial, channels, dvr }, index) => (
            <SwiperSlide key={index}>
              <BreakUpPlanGridItem
                id={index}
                label={label}
                price={price}
                trial={trial}
                channels={channels}
                dvr={dvr}
                selected={selectedItemId}
                onClick={handleSelect}
                planGridLabels={planGridLabels}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlanGrid;
