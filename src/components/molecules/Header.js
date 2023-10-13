import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { loginUser } from '../../redux/actions/userAuth0';
import { openPopup } from '../../redux/actions/popUp';
import { BUTTON_THEME } from '../../settings';
import UserSettingButton from '../atoms/UserSettingButton';
import Logo from '../atoms/Logo';
import ActionButton from '../atoms/ActionButton';

const Header = ({ logoTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const userAuth0 = useSelector(state => state.userAuth0);

  const { loginWithRedirect, logout, user } = useAuth0();
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  useEffect(() => {
    if (user) {
      dispatch(loginUser(user));
    }
  }, [user, dispatch]);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  const handleLogOut = () => {
    logout();
    setShowMenu(false);
    dispatch(loginUser(null));
  };

  return (
    <header className="max-w-full lg:max-w-[1024px] xl:max-w-[1368px] h-[32px] lg:h-[40px] px-[20px] mt-[79px] sm:mt-[16px] lg:mt-[24px] mb-[60px] sm:mb-[32px] mx-auto flex justify-between items-center lg:px-0 relative">
      <Logo theme={logoTheme} />
      {!!userAuth0 ? (
        <UserSettingButton
          image={userAuth0.picture}
          lastName={userAuth0.family_name}
          firstName={userAuth0.given_name}
          onClick={handleToggleMenu}
          isActive={showMenu}
        />
      ) : (
        <ActionButton
          label="Sign In"
          theme={BUTTON_THEME.SECONDARY}
          onClick={loginWithRedirect}
          className="w-[100px] h-[36px] text-[16px] leading-[24px] md-sm:w-[86px] md-sm:h-[34px] md-sm:text-[14px] md-sm:leading-[22px] lg:text-[14px] lg:leading-[20px] lg:h-[40px] lg:w-[140px]"
        />
      )}

      <div
        className={cn(
          'flex flex-col gap-[10px] absolute right-[75px] lg:right-[55px] top-[-10px] lg-sm:top-0 transition-opacity duration-500',
          showMenu
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        <ActionButton
          label="Sign Out"
          theme={BUTTON_THEME.MAIN}
          onClick={handleLogOut}
          className="w-[70px] h-[30px] text-[12px] leading-[20px]"
        />
        <ActionButton
          label="Start Trial"
          theme={BUTTON_THEME.MAIN}
          onClick={handleOpenPopup}
          className="w-[70px] h-[30px] text-[12px] leading-[20px]"
        />
      </div>
    </header>
  );
};

export default Header;
