import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcon from '../atoms/SocialMediaIcon';

// TODO: add refs
const navigationList = [
  { id: '1', type: 'facebook', href: '/' },
  { id: '2', type: 'instagram', href: '/' },
  { id: '3', type: 'twitter', href: '/' },
  { id: '4', type: 'youtube', href: '/' },
  { id: '5', type: 'tiktok', href: '/' },
  { id: '6', type: 'threads', href: '/' },
];

const SocialMediasList = () => {
  return (
    <nav className="flex gap-[20px] lg:gap-[14px]">
      {navigationList.map(({ id, type, href }) => (
        <Link to={href} key={id}>
          <SocialMediaIcon
            socialNetwork={type}
            className={''}
            isResponsible={true}
          />
        </Link>
      ))}
    </nav>
  );
};

export default SocialMediasList;
