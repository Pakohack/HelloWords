import React from 'react';

const BreakUpListItem = ({ label, index }) => {
  return (
    <li className="text-white-60 text-[14px] font-regular leading-[20px] flex gap-[5px] px-[5px]">
      <p>{`${index + 1}.`}</p>
      <p className="text-left">{label}</p>
    </li>
  );
};

export default BreakUpListItem;
