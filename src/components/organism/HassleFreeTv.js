import React from 'react';
// import HassleFreeTvTabs from './HassleFreeTvTabs'; Will be used in future
import HassleFreeTvVideosGrid from '../molecules/HassleFreeTvVideosGrid';
import SectionTitle from '../atoms/SectionTitle';

const title = `Hassle-free TV, the way it's meant to be`;
// const tabs = [
//   {
//     id: '1',
//     label: 'Live',
//     title: 'Watch it live!',
//     subTitle: `Stream more than 70+ channels live. See what's trending right from the Homepage or check out the guide to see what's on now.`,
//   },
//   {
//     id: '2',
//     label: 'On-demand',
//     title: 'Or Not!',
//     subTitle: `Stream more than 70+ channels live. See what's trending right from the Homepage or check out the guide to see what's on now.`,
//   },
//   {
//     id: '3',
//     label: 'DVR',
//     title: 'Or Yes!',
//     subTitle: `Stream more than 70+ channels live. See what's trending right from the Homepage or check out the guide to see what's on now.`,
//   },
// ];
const videosList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const HassleFreeTV = () => {
  return (
    <section className="mb-[70px] sm:mb-[60px] lg:mb-[86px]">
      <SectionTitle title={title} className={'mb-[32px] lg:mb-[60px]'} />
      <div className="max-w-[1136px] mx-auto flex justify-center items-center gap-[102px]">
        {/* <HassleFreeTvTabs tabs={tabs} /> */}
        <HassleFreeTvVideosGrid videosList={videosList} />
      </div>
    </section>
  );
};

export default HassleFreeTV;
