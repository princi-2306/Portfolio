import React from 'react'
import CountUp from './animations/CountUp'
import Aurora from './animations/Aurora'
import Lightning from './animations/Lightning'

const LoadingPage = () => {
  return (
    <div className='w-full h-screen relative'>
    <Lightning
      hue={220}
      xOffset={0}
      speed={1}
      intensity={1}
      size={1}
    />
  </div>
  )
}

export default LoadingPage
