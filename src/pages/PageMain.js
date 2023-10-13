import React from 'react';
import BreakUpSection from '../components/organism/BreakUp';
import MainHero from '../components/organism/MainHero';
import Watch250Section from '../components/organism/Watch250';
import HassleFreeTV from '../components/organism/HassleFreeTv';
import StreamAnytime from '../components/organism/StreamAnytime';
import FrequentlyAskedQuestions from '../components/organism/FrequentlyAskedQuestions';
import Footer from '../components/organism/Footer';

const Main = () => {
  return (
    <>
      <MainHero />
      <BreakUpSection />
      <Watch250Section />
      <HassleFreeTV />
      <StreamAnytime />
      <FrequentlyAskedQuestions />
      <Footer />
      {/* {showPopUp && <PaymentPopUp onClose={handleClosePopUp}/>} */}
    </>
  );
};

export default Main;
