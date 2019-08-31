import React from 'react'

import photo from './About/images/photo.jpg'

export default () => {
  return (
    <div className="about">
      <div className="about__desktopContainerLeft">
        <div className="about__headerContainer">
          <h2 className="about__header">About Me</h2>
          <div className="about__divider" />
          <img
            src={photo}
            alt="Tav Hafner tablet"
            className="about__photoTablet"
          />
        </div>
        <div className="about__textContainer">
          <p className="about__paragraph">
            I’m a professional web developer with experience building and
            maintaining enterprise-level applications. My range of knowledge
            lies across the full stack of development, from creating rich and
            robust user interfaces to building and testing APIs. I currently
            work on the front end team at Overstock.com, where my contributions
            to projects have been estimated to save 600+ hours of work per year.{' '}
          </p>
          <p className="about__paragraph">
            When I’m not coding, I enjoy playing guitar, watching movies,
            hiking, biking and skiing in the incredible state of Utah.
          </p>
        </div>
      </div>
      <div className="about__desktopContainerRight">
        <img
          src={photo}
          alt="Tav Hafner desktop"
          className="about__photoDesktop"
        />
      </div>
    </div>
  )
}
