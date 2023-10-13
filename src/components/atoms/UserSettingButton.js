import React from 'react';
import cn from 'classnames';
import UserAvatar from './UserAvatar';

import settingsIcon from '../../assets/settings-icon.svg';

const UserSettingButton = ({
  image,
  lastName,
  firstName,
  onClick,
  isActive,
}) => {
  return (
    <button
      className="group w-[40px] h-[40px] rounded-full relative overflow-hidden"
      onClick={onClick}
    >
      <UserAvatar image={image} lastName={lastName} firstName={firstName} />
      <div
        className={cn(
          'h-full absolute left-0 top-0 right-0 bottom-0 bg-white-80 z-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
      >
        <img src={settingsIcon} alt="settings icon" className="" />
      </div>
    </button>
  );
};

export default UserSettingButton;
