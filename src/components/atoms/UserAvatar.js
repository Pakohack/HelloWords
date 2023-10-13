import React from 'react';
import getFirstSymbolOfString from '../../utils/getFirstSymbolOfString';

const UserAvatar = ({ image, lastName, firstName }) => {
  return (
    <>
      {image ? (
        <img
          src={image}
          alt="user avatar"
          className="w-[40px] h-[40px] rounded-full object-contain"
        />
      ) : (
        <div className="w-[40px] h-[40px] rounded-full bg-white-80">
          <p className="text-blue">
            <span>{getFirstSymbolOfString(firstName)}</span>
            <span>{getFirstSymbolOfString(lastName)}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default UserAvatar;
