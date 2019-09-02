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
      </div>
    </div>
  )
}
