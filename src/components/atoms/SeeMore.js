import React from 'react';

function SeeMoreButton({ isActive, onClick }) {
  return (
    <button onClick={onClick}>
      <span className="text-blue text-[14px] leading-[20px] font-semibold lg:text-[12px] lg:leading-[18px] pb-[2px] border-b border-b-blue">
        {isActive ? 'See less' : 'See more'}
      </span>
    </button>
  );
}

export default SeeMoreButton;
