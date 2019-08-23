import React from "react"

import Splash from '../components/Splash';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

import '../assets/scss/main.scss';

export default () => {
    return (
        <div className="portfolio" id="portfolio-wrapper">
            <Splash />
            <About />
            <Skills />
            <Contact />
        </div>
    )
}
