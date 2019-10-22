import React from 'react';
import { Helmet } from 'react-helmet';

import Splash from '../components/Splash';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

import '../assets/scss/main.scss';

export default () => {
  return (
    <div className="portfolio" id="portfolio-wrapper">
      <Helmet>
      <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="description" content="I'm a professional front end engineer with knowledge across the full stack of web development." />
          <title>Tav Hafner Web Development</title>
      </Helmet>
      <Splash />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};
