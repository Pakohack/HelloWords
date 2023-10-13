import React from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import logoFacebookDesktop from '../../assets/social-network/facebook-desktop.svg';
import logoInstagramDesktop from '../../assets/social-network/instagram-desktop.svg';
import logoThreadsDesktop from '../../assets/social-network/threads-desktop.svg';
import logoTiktokDesktop from '../../assets/social-network/tiktok-desktop.svg';
import logoTwitterDesktop from '../../assets/social-network/twitter-x-desktop.svg';
import logoYoutubeDektop from '../../assets/social-network/youtube-desktop.svg';
import logoFacebookMobile from '../../assets/social-network/facebook-mobile.svg';
import logoInstagramMobile from '../../assets/social-network/instagram-mobile.svg';
import logoThreadsMobile from '../../assets/social-network/threads-mobile.svg';
import logoTiktokMobile from '../../assets/social-network/tiktok-mobile.svg';
import logoTwitterMobile from '../../assets/social-network/twitter-x-mobile.svg';
import logoYoutubeMobile from '../../assets/social-network/youtube-mobile.svg';

const SocialMediaIcon = ({ socialNetwork, className, isResponsible }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const socialNetworkIcons = {
    facebook:
      isResponsible && isMobile ? logoFacebookMobile : logoFacebookDesktop,
    instagram:
      isResponsible && isMobile ? logoInstagramMobile : logoInstagramDesktop,
    threads: isResponsible && isMobile ? logoThreadsMobile : logoThreadsDesktop,
    tiktok: isResponsible && isMobile ? logoTiktokMobile : logoTiktokDesktop,
    twitter: isResponsible && isMobile ? logoTwitterMobile : logoTwitterDesktop,
    youtube: isResponsible && isMobile ? logoYoutubeMobile : logoYoutubeDektop,
  };

  const icon = socialNetworkIcons[socialNetwork?.toLowerCase()];

  if (!icon) {
    return null;
  }

  return (
    <img
      src={icon}
      alt={`${socialNetwork.toLowerCase()}-icon`}
      className={cn(className)}
    />
  );
};

export default SocialMediaIcon;
