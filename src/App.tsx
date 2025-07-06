import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import LoadingPage from './LoadingPage'
import gsap from 'gsap'
import LandingPage from './LandingPage'

const App = () => {
  const content = useRef(null);
  const preLoader = useRef(null);
  // const skillRef = useRef(null);
  
  useEffect(() => {
      // Initially hide the content
      gsap.set(content.current, { opacity: 0, display: 'none' });

      // Show the preloader immediately
      gsap.to(preLoader.current, { opacity: 1, duration: 0.5 });

      // After 4 seconds, hide the preloader and show the content
      gsap.timeline()
          .to(preLoader.current, {
              opacity: 0,
              duration: 0.5,
              delay: 4,
              onComplete: () => {
                  preLoader.current.style.display = 'none';
              }
          })
          .to(content.current, {
              opacity: 1,
              duration: 0.5,
              display: 'block'
          }, "-=0.5"); // Overlap the animations for a smooth transition
    
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <div ref={preLoader}><LoadingPage /></div>
        <div ref={content}><LandingPage/></div>
        </div>
    </ThemeProvider>
  )
}

export default App
