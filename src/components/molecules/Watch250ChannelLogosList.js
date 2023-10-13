import React from 'react';

import channelAE from '../../assets/channels/a&e.svg';
import channelAmc from '../../assets/channels/amc.svg';
import channelBet from '../../assets/channels/bet.svg';
import channelComedyCentral from '../../assets/channels/comedy-central.svg';
import channelDiscovery from '../../assets/channels/discovery.svg';
import channelFoodNetwork from '../../assets/channels/food-network.svg';
import channelHgtv from '../../assets/channels/hgtv.svg';
import channelInvestigationDiscovery from '../../assets/channels/investigation-discovery.svg';
import channelLifeTime from '../../assets/channels/lifetime.svg';
import channelMtv from '../../assets/channels/mtv.svg';
import channelNickelodeon from '../../assets/channels/nickelodeon.svg';
import channelOwn from '../../assets/channels/own.svg';
import channelParamount from '../../assets/channels/paramount.svg';
import channelTlc from '../../assets/channels/tlc.svg';
import channelVh1 from '../../assets/channels/vh1.svg';

const listOfChannels = [
  { id: '1', img: channelAE, name: 'A&E' },
  { id: '2', img: channelComedyCentral, name: 'ComedyCentral' },
  { id: '3', img: channelAmc, name: 'AMC' },
  { id: '4', img: channelFoodNetwork, name: 'FoodNetwork' },
  { id: '5', img: channelBet, name: 'BET' },
  { id: '6', img: channelHgtv, name: 'HGTV' },
  { id: '7', img: channelDiscovery, name: 'Discovery' },
  {
    id: '8',
    img: channelInvestigationDiscovery,
    name: 'InvestigationDiscovery',
  },
  { id: '9', img: channelNickelodeon, name: 'Nickelodeon' },
  { id: '10', img: channelMtv, name: 'MTV' },
  { id: '11', img: channelLifeTime, name: 'LifeTime' },

  { id: '12', img: channelOwn, name: 'OWN' },
  { id: '13', img: channelTlc, name: 'TLC' },
  { id: '14', img: channelParamount, name: 'Paramount' },
  { id: '15', img: channelVh1, name: 'VH1' },
];

const Watch250ChannelLogosList = () => {
  return (
    <ul className="grid grid-cols-3 lg-sm:grid-cols-5 lg:grid-cols-3 gap-y-[20px] lg:gap-y-[27.5px] w-full sm:w-[335px] lg-sm:w-[534px] lg:w-[564px] mx-auto justify-items-center">
      {listOfChannels.map(({ id, img, name }) => (
        <li
          key={id}
          className="w-[98px] lg-sm:w-[98px] xl:w-[150px] h-[60px] flex justify-center items-center rounded-[28px] bg-white-8"
        >
          <img src={img} alt={`${name} channel logo`} />
        </li>
      ))}
    </ul>
  );
};

export default Watch250ChannelLogosList;
