import React from 'react';
import BreakUpPlanGrid from '../molecules/BreakUpPlanGrid';
import BreakUpList from '../molecules/BreakUpList';
import BreakUpCarousel from '../molecules/carousel/BreakUpCarousel';
import SectionTitle from '../atoms/SectionTitle';

const title = `Don't break the bank. Break up with cable`;

const BreakUpSection = () => {
  return (
    <section className="mb-[70px] sm:mb-[60px] lg:mb-[86px]">
      <SectionTitle
        title={title}
        className={'mb-[42px] sm:mb-[44px] lg:mb-[42px]'}
      />
      <BreakUpPlanGrid />
      <BreakUpList />
      <BreakUpCarousel />
    </section>
  );
};

export default BreakUpSection;
