import React from 'react'

import SplashDiagonal from './Splash/SplashDiagonal'

export default () => {
  return (
    <div className="splash">
      <div className="splash__headerContainer">
        <h1 className="splash__header">Hi,<br /> I'm Tav.</h1>
      </div>
      <div className="splash__subheaderContainer">
        <div className="splash__subheaderWrapper">
          <h3 className="splash__subheader">
            I specialize in creating optimized and elegant web experiences.
          </h3>
        </div>
      </div>
      {/* <div className='splash__diagonalContainer'>
        <SplashDiagonal />
      </div> */}
    </div>
  )
}
