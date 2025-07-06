import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Model from './cosmic_cell/Model'
import ModelViewer from './animations/ModelViewer'

const LandingPage = () => {

    // const nav = useRef<React.MutableRefObject<null>>(null);
    // useEffect(() => {
    //     gsap.timeline()
    //     .from()
    // })
  return (
    <div>
          <Navbar />
          {/* <ModelViewer 
           url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
           width={400}
           height={400} /> */}
          <Model/>
    </div>
  )
}

export default LandingPage
