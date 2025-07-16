import React from 'react'
import CountUp from './animations/CountUp'
import Aurora from './animations/Aurora'
import Lightning from './animations/Lightning'

const LoadingPage = () => {
  return (
    <div className="w-full h-screen relative">
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </div>
  );
}

export default LoadingPage
