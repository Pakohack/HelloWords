import React from 'react';
import cn from 'classnames';
import SyncLoader from 'react-spinners/SyncLoader';

const CommonLoader = ({ size = 20, color = '#0A86EF', className }) => {
  return (
    <div className={cn(className)}>
      <SyncLoader color={color} size={size} />
    </div>
  );
};

export default CommonLoader;
