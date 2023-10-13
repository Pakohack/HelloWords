import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AccordionItem from '../atoms/AccordionItem';
import SectionTitle from '../atoms/SectionTitle';

import cancelDesktop from '../../assets/frequently-asked-questions/cancel-desktop.svg';
import cancelMobile from '../../assets/frequently-asked-questions/cancel-mobile.svg';
import dollarDesktop from '../../assets/frequently-asked-questions/dollar-desktop.svg';
import dollarMobile from '../../assets/frequently-asked-questions/dollar-mobile.svg';
import dvrDesktop from '../../assets/frequently-asked-questions/dvr-desktop.svg';
import dvrMobile from '../../assets/frequently-asked-questions/dvr-mobile.svg';
import lightningDesktop from '../../assets/frequently-asked-questions/lightning-desktop.svg';
import lightningMobile from '../../assets/frequently-asked-questions/lightning-mobile.svg';
import tvDesktop from '../../assets/frequently-asked-questions/tv-desktop.svg';
import tvMobile from '../../assets/frequently-asked-questions/tv-mobile.svg';

const title = 'Frequently Asked Questions';

// TODO: add real answers
const mockAnswer = `blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah
blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah blah-blah-blah`;

function FrequentlyAskedQuestions() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [openedId, setOpenedId] = useState(null);

  const handleOpen = id => {
    if (id === openedId) {
      setOpenedId(null);
      return;
    }
    setOpenedId(id);
  };

  const faqList = [
    {
      id: '1',
      label: 'Can I record my favorite shows?',
      img: isDesktop ? dvrDesktop : dvrMobile,
      answer: mockAnswer,
    },
    {
      id: '2',
      label: 'Can I stream on multiple devices?',
      img: isDesktop ? lightningDesktop : lightningMobile,
      answer: mockAnswer,
    },
    {
      id: '3',
      label: 'Can I cancel if it`s not for me? Is there a contract?',
      img: isDesktop ? cancelDesktop : cancelMobile,
      answer: mockAnswer,
    },
    {
      id: '4',
      label: 'What do I need to get started?',
      img: isDesktop ? tvDesktop : tvMobile,
      answer: mockAnswer,
    },
    {
      id: '5',
      label: 'How much does InstaTV cost?',
      img: isDesktop ? dollarDesktop : dollarMobile,
      answer: mockAnswer,
    },
  ];

  return (
    <section className="mb-[70px] sm:mb-[60px] lg:mb-[86px]">
      <SectionTitle title={title} className={'mb-[32px] lg:mb-[60px]'} />
      <div className="h-[430px] md-sm:h-[380px] lg:h-[400px] max-w-[calc(100%-40px)] lg:max-w-[1024px] xl:max-w-[1136px] mx-auto flex flex-col gap-[20px]">
        {faqList.map(({ id, label, img, answer }) => (
          <AccordionItem
            key={id}
            id={id}
            label={label}
            img={img}
            answer={answer}
            openedId={openedId}
            onClick={handleOpen}
          />
        ))}
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
