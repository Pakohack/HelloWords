import React, { useEffect } from 'react';
import FilmHero from '../components/organism/FilmHero'

const Film = () => {
  
  // add background color to <body/> 
  useEffect(() => {
    document.body.classList.add('bg-background-light');
    return () => {
      document.body.classList.remove('bg-background-light');
    };
  }, []);

  return <><FilmHero /></>;
};

export default Film;
