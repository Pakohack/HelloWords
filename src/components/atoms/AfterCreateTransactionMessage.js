import React from 'react';
import cn from 'classnames';
import { SUCCESS } from '../../settings';
import errorImg from '../../assets/error.png';
import successCheckImg from '../../assets/green_check_mark.png';

const AfterCreateTransactionMessage = ({ message }) => {
  const backgroundImageStyle = {
    backgroundImage:
      message === SUCCESS ? `url(${successCheckImg})` : `url(${errorImg})`,
  };

  return (
    <div
      className="bg-contain bg-center bg-no-repeat relative w-[500px] h-full"
      style={backgroundImageStyle}
    >
      <span
        className={cn(
          'text-[12px] absolute bottom-[40px] left-0 right-0 mx-auto font-bold',
          message === SUCCESS ? 'text-green-500' : 'text-red-500',
        )}
      >
        {message === SUCCESS
          ? 'Your login credentials will be sent to your registered email address.'
          : message}
      </span>
    </div>
  );
};

export default AfterCreateTransactionMessage;
