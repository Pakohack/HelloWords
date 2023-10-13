import React from 'react';
import cn from 'classnames';
import Logo from './Logo';

const BreakUpPlanGridItem = ({
  id,
  label,
  price,
  trial,
  channels,
  dvr,
  selected,
  onClick,
  planGridLabels,
}) => {
  const renderMobileContent = index => {
    const { img, title } = planGridLabels?.[index];
    return (
      <>
        <div className="lg:hidden flex flex-row gap-[6px] flex-nowrap justify-center">
          <img src={img} alt={`icon-${title}`} width={24} height={24} />
          <h4 className="text-white text-[16px] font-semibold leading-[24px] ">
            {title}
          </h4>
        </div>
      </>
    );
  };

  return (
    <div
      // onClick={() => onClick(id)}
      key={id}
      className={cn(
        'flex flex-col items-center text-center text-white text-[18px] lg:text-[20px] font-medium leading-[100%] w-[253px] lg:w-[243px] lg:px-[50px]',
        id === selected && 'selected-plan-item',
      )}
    >
      {id === 0 ? (
        <div className="h-[104px] pt-[30px] pb-[40px]">
          <Logo />
        </div>
      ) : (
        <h4
          className="h-[104px] pt-[30px] pb-[40px]"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}
      <div className="flex flex-col gap-[12px] mb-[32px] lg:mb-[0] h-[58px] lg:h-[104px] pt-0 lg:py-[40px]">
        {renderMobileContent(1)}
        <p dangerouslySetInnerHTML={{ __html: price }} />
      </div>
      <div className="flex flex-col gap-[12px] mb-[32px] lg:mb-[0] h-[58px] lg:h-[104px] pt-0 lg:py-[40px]">
        {renderMobileContent(2)}
        <p dangerouslySetInnerHTML={{ __html: trial }} />
      </div>
      <div className="flex flex-col gap-[12px] mb-[32px] lg:mb-[0] h-[58px] lg:h-[104px] pt-0 lg:py-[40px]">
        {renderMobileContent(3)}
        <p dangerouslySetInnerHTML={{ __html: channels }} />
      </div>
      <div className="flex flex-col gap-[12px] mb-[32px] lg:mb-[0] h-[58px] lg:h-[104px] pt-0 lg:py-[40px]">
        {renderMobileContent(4)}
        <p
          dangerouslySetInnerHTML={{ __html: dvr }}
          className="max-w-[140px]"
        />
      </div>
    </div>
  );
};

export default BreakUpPlanGridItem;
