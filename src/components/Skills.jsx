import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import SkillsDivider from './Skills/SkillsDivider';

const LazyBackground = React.forwardRef(({ inView, ...rest }, ref) => {
  return inView ? <div className="skills__background" /> : <div ref={ref} />;
});

const Skills = () => {
  const [setRef, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="skills">
      <div className="skills__dividerContainer">
        <SkillsDivider />
      </div>
      <LazyBackground inView={inView} ref={setRef} />
      <div className="skills__content">
        <h2 className="skills__header">Skills</h2>
        <div className="skills__list">
          <div className="skills__listItem">
            <span className="skills__listSpan">JAVASCRIPT</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">REACT</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">HTML5</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">CSS3</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">NODE</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">JEST</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">WEBPACK</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;