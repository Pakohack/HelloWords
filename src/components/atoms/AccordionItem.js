import React from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import arrowDownDesktop from '../../assets/arrow-down-desktop.svg';
import arrowDownMobile from '../../assets/arrow-down-mobile.svg';

const AccordionItem = ({ id, label, img, answer, openedId, onClick }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="relative">
      <div
        className="w-full cursor-pointer flex items-center bg-white-20 text-left rounded-[12px] h-[70px] md-sm:h-[60px] lg:h-[64px] py-[18px] px-[10px] lg:px-[20px] lg:py-[20px]"
        onClick={() => onClick(id)}
      >
        <img src={img} alt="" className="mr-[12px]" />
        <h3 className="text-white font-semibold text-[16px] lg:text-[22px] leading-[24px] lg:leading-[20px] pr-[20px]">
          {label}
        </h3>
        <img
          src={isDesktop ? arrowDownDesktop : arrowDownMobile}
          alt="arrow down"
          className={cn(
            'ml-auto transition-all duration-400',
            openedId === id ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={cn(
          'accordion-expanded-block mt-[10px] transition-all h-[100px] lg:h-[150px] duration-400 max-w-full lg:max-w-[1024px] xl:max-w-[1136px] bg-background-80 rounded-[12px] text-[14px] lg:text-[18px] text-white-80',
          openedId === id
            ? 'opacity-100 z-[10] static'
            : 'opacity-0 z-[-10] absolute',
        )}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;
