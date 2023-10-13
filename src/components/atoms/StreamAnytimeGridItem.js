import React from 'react';

const StreamAnytimeGridItem = ({ id, img, label }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-[56px] h-[56px] lg:w-[100px] lg:h-[100px] bg-white-8 rounded-[18px] lg:rounded-[28px]">
      <img src={img} alt={`${label}-logo`} />
    </div>
  );
};

export default StreamAnytimeGridItem;
