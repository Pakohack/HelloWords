import React from 'react';
import BreakUpListItem from '../atoms/BreakUpListItem';

const list = [
  `Based on Spectrum TV Select monthly plan sap as of Nan. 2,023 with broadcast fee Doesn't account for any free trialsAiscounts or other offers`,
  `Based on finrty's Popular TV monthly plan SRP as of March 2. 2023 with maximum broadcast TV and regional sports Mes Doesnt account for any free trials. disoaunts or ogler offers Please check Xfinity, website for the applicable broadcast TV and regional sports fees in your area`,
  `Philo DAR is unlimited for 12 months. +The Amity name and logo are properties of Comcast. The Spectrum name and logo are properties of Charter. Use of Philo requires Internet access.`,
];

const BreakUpList = () => {
  return (
    <ol className=" mx-auto flex flex-col gap-[10px] list-decimal mb-[32px] max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px]">
      {list.map((item, index) => (
        <BreakUpListItem key={index} label={item} index={index} />
      ))}
    </ol>
  );
};

export default BreakUpList;
