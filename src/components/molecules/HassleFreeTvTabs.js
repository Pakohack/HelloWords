import React, { useState } from 'react';
import cn from 'classnames';

const HassleFreeTvTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = id => {
    setActiveTab(id);
  };

  return (
    <div className="max-w-[500px] h-[206px]">
      <div className="flex gap-[20px]">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id)}
            className={cn(
              `flex px-[6px] pb-[2px] justify-center items-center text-[14px] font-semibold leading-[20px] h-[22px] transition-all duration-200 whitespace-nowrap`,
              id === activeTab
                ? 'text-blue border-b border-blue'
                : 'text-white-60 border-none',
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="relative w-[500px]">
        {tabs.map(({ id, title, subTitle }) => (
          <div
            key={id}
            className={cn(
              'transition-all duration-700 absolute top-[32px] left-0',
              id === activeTab ? 'opacity-100' : 'opacity-0',
            )}
          >
            <h2 className="text-left text-white text-[40px] font-[800] leading-[58px]">
              {title}
            </h2>
            <p className="text-left text-white-80 text-[18px] font-semibold leading-[26px]">
              {subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HassleFreeTvTabs;
