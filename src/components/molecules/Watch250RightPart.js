import React from 'react';
import Watch250Video from '../atoms/Watch250Video';
import Watch250Carousel from './carousel/Watch250Carousel';

const Watch250RightPart = ({ videoId, listOfImages }) => {
  return (
    <div className="h-[full] flex flex-col items-center justify-start lg-sm:justify-center gap-[12px]">
      <Watch250Video videoId={videoId} />
      <Watch250Carousel listOfImages={listOfImages} />
    </div>
  );
};

export default Watch250RightPart;
