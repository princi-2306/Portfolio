import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import LoadingPage from './LoadingPage'
import gsap from 'gsap'
import LandingPage from './LandingPage'
import Skills from './Skills'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechStack from './TechStack'

// gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const content = useRef<HTMLDivElement>(null);
  const preLoader = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
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
          }, "-=0.5")// Overlap the animations for a smooth transition
          
  }, []);
    //  gsap.utils.toArray([aboutRef.current, skillsRef.current, contactRef.current]).forEach(section => {
    //     gsap.from(section, {
    //       opacity: 0,
    //       y: 50,
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: section,
    //         start: "top 80%",
    //         toggleActions: "play none none none",
    //         // markers: true // for debugging
    //       }
    //     });
  //   });
       const sections = [aboutRef.current, skillsRef.current, contactRef.current].filter(
      (section): section is HTMLDivElement => section !== null
       );
       
        sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          // markers: true // uncomment for debugging
        }
      });
    });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        {/* <div ref={preLoader}><LoadingPage /></div> */}
        <div ref={content}>
          <div className='land'><LandingPage /></div>
          <div ref={aboutRef}><AboutMe/></div>
          <div ref={skillsRef}><Skills /></div>
          <div><TechStack/></div>
          <div ref={contactRef}><Contact/></div>
         
        </div>
        </div>
    </ThemeProvider>
  )
}

export default App
