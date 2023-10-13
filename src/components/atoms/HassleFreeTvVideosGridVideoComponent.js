import React from 'react';
import cn from 'classnames';
import playIcon from '../../assets/play-icon.svg';

const HassleFreeTvVideosGridVideoComponent = ({ id, className }) => {
  const handleVideoClick = () => {
    console.log(`hello, I am VideoComponent ${id}`);
  };

  return (
    <div
      className={cn(
        'mock-video-component rounded-[12px] relative w-[261px]',
        className,
      )}
    >
      <button
        onClick={handleVideoClick}
        className="absolute m-auto flex items-center justify-center left-0 right-0 top-0 bottom-0 w-[50px] h-[50px] cursor-pointer"
      >
        <img src={playIcon} alt="icon-play w-[50px] h-[50px]" />
      </button>
    </div>
  );
};

export default HassleFreeTvVideosGridVideoComponent;
