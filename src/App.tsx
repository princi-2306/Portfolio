import { useEffect, useRef } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import LoadingPage from './Pages/LoadingPage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LandingPage from './Pages/LandingPage'
import Skills from './Pages/Skills'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'
import TechStack from './Pages/TechStack'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const content = useRef<HTMLDivElement>(null);
  const preLoader = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initially hide the content
    if (content.current) {
      gsap.set(content.current, { opacity: 0, display: 'none' });
    }

    // Show the preloader immediately
    if (preLoader.current) {
      gsap.to(preLoader.current, { opacity: 1, duration: 0.5 });
    }

    // After 4 seconds, hide the preloader and show the content
    const timeline = gsap.timeline();
    
    timeline
      .to(preLoader.current, {
        opacity: 0,
        duration: 0.5,
        delay: 4,
        onComplete: () => {
          if (preLoader.current) {
            preLoader.current.style.display = 'none';
          }
        }
      })
      .to(content.current, {
        opacity: 1,
        duration: 0.5,
        display: 'block'
      }, "-=0.5"); // Overlap the animations for a smooth transition

    // Setup scroll animations after content is shown
    timeline.call(() => {
      const sections = [aboutRef.current, skillsRef.current, techStackRef.current, contactRef.current].filter(
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
    });

    // Cleanup function
    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        {/* Preloader */}
        <div ref={preLoader}>
          <LoadingPage />
        </div>
        
        {/* Main Content */}
        <div ref={content}>
          <div className='land'>
            <LandingPage />
          </div>
          <div ref={aboutRef}>
            <AboutMe />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={techStackRef}>
            <TechStack />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App