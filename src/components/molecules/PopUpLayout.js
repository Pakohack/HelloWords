import React, { useEffect } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../redux/actions/popUp';
import closeIcon from '../../assets/close.svg';

const PopUpLayout = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const popUp = useSelector(state => state.popUp);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  useEffect(() => {
    const body = document.body;

    const classesToAdd = ['w-[100vw]', 'h-[100vh]', 'overflow-hidden'];

    if (isTablet && popUp) {
      classesToAdd.forEach(className => {
        body.classList.add(className);
      });
    }

    return () => {
      classesToAdd.forEach(className => {
        body.classList.remove(className);
      });
    };
  }, [isTablet, popUp]);

  const shadowClass =
    'position fixed h-screen w-screen bg-background bg-opacity-80 top-0 bottom-0 right-0 left-0 mx-auto z-[2] cursor-pointer transition-opacity duration-500';
  const popupClass =
    'position z-[101] flex h-[100vh] md:h-[80vh] lg:h-[65vh] items-center justify-center w-[100vw] fixed md:w-[calc(100%-40px)] md:w-[576px] lg:w-[980px] l:w-[1024px] xl:w-[1136px] pt-[150px] sm:pt-[0] pb-[50px] sm:pb-[20px] p-[20px] md:px-[50px] top-1/2 left-1/2 mx-auto transform translate-x-[-50%] translate-y-[-50%] rounded-0 overflow-y-auto md:rounded-[28px] bg-white bg-opacity-10 backdrop-blur-lg cursor-default';
  const closeButtonClass = 'absolute top-[50px] md:top-[20px] right-[20px]';

  const handleShadowClick = e => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  return (
    <div
      className={cn(
        shadowClass,
        popUp
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      onClick={handleShadowClick}
    >
      <div className={popupClass}>
        <button className={closeButtonClass} onClick={handleClosePopup}>
          <img src={closeIcon} alt="close icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUpLayout;
