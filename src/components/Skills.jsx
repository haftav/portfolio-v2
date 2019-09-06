import React from 'react'
import SkillsDivider from './Skills/SkillsDivider';

export default () => {
  return (
    <div className="skills">
      <div className="skills__dividerContainer">
        <SkillsDivider />
      </div>
      <div className="skills__colorOverlay" />
      <div className="skills__content">
        <h2 className="skills__header">Skills</h2>
        {/* <div className="skills__list">
          <div className="skills__listItem">
            <span className="skills__listSpan">JAVASCRIPT</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">REACT</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">HTML</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">CSS/SASS/LESS</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">NODE</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">TESTING</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">BUILDING</span>
          </div>
          <div className="skills__listItem">
            <span className="skills__listSpan">SQL</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
