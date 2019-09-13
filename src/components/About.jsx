import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

import photo from './About/images/photo.jpg';

const LazyImage = React.forwardRef(
  ({ inView, source, device, ...rest }, ref) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (inView) {
        const img = new Image();
        img.onload = () => setLoaded(true);
        img.src = source;
      }
    }, [inView]);

    if (loaded) {
      return (
        <CSSTransition
          timeout={1000}
          in={loaded}
          appear
          classNames="profilePhoto"
        >
          <img
            ref={ref}
            src={`${loaded ? source : ''}`}
            alt={`Tav Hafner ${device}`}
            className={`about__photo${device}`}
          />
        </CSSTransition>
      );
    } else {
      return <div ref={ref} className={`lazyPlaceholder${device}`}/>;
    }
  }
);

const About = () => {
  const [setDesktopRef, desktopInView] = useInView({
    triggerOnce: true,
  });

  const [setMobileRef, mobileInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="about">
      <div className="about__desktopContainerLeft">
        <div className="about__headerContainer">
          <h2 className="about__header">About Me</h2>
          <div className="about__divider" />
          <div className="about__mobileImageWrapper">
            <LazyImage
              ref={setMobileRef}
              inView={mobileInView}
              source={photo}
              device="Mobile"
            />
          </div>
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
        <div className="about__desktopDivider" />
        <LazyImage
          ref={setDesktopRef}
          inView={desktopInView}
          source={photo}
          device="Desktop"
        />
      </div>
    </div>
  );
};

export default About;
