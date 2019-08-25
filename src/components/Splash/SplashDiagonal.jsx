import React from 'react'
import Diagonal from './Diagonal.svg'

const SmallDiagonal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 782.752"
    className="splashDiagonal splashDiagonal--small"
  >
    <path
      d="M4510.324-925.616v386.379h1920v-782.752Z"
      transform="translate(-4510.324 1321.989)"
      fill="#fff"
    />
  </svg>
)

const LargeDiagonal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3840 1565.504"
    className="splashDiagonal splashDiagonal--large"
    preserveAspectRatio="none"
  >
    <path
      d="M4510.325-529.243V243.515h3840v-1565.5Z"
      transform="translate(-4510.325 1321.989)"
      fill="#fff"
    />
  </svg>
)

export default () => (
  <>
    <SmallDiagonal />
    <LargeDiagonal />
  </>
  // <img src={SmallDiagonal} alt="diagonal" className="diagonal"/>
)
