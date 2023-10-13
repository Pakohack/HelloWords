import React from 'react';
import error500Img from '../../assets/error-500.png';

const Error500 = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${error500Img})`,
  };

  return (
    <div
      className="bg-contain bg-center bg-no-repeat relative w-[500px] h-full"
      style={backgroundImageStyle}
    >
      <span className="text-blue text-[12px] absolute bottom-[40px] left-0 right-0 mx-auto font-bold">
        Please... try later
      </span>
    </div>
  );
};

export default Error500;
