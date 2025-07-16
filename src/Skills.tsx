import React, { useEffect, useRef, useState } from 'react'
import SpotlightCard from './animations/SpotlightCard'
import img from './assets/s1.png'
import img1 from './assets/s2.png'
import img2 from './assets/Screenshot 2025-07-11 010316.png'
import img3 from './assets/Screenshot 2025-07-11 011055.png'
import GradientText from './animations/GradientText'
import img4 from './assets/certificate (1).png'
import img5 from './assets/download.png'
import img6 from './assets/Screenshot 2025-07-14 002834.png'
import img7 from './assets/Screenshot 2025-07-14 012231.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [isProject, setIsProject] = useState<boolean>(true);
    const containerRef = useRef(null);
    const tabsContainerRef = useRef(null);
    const projectsTabRef = useRef(null);
    const certificatesTabRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Animate the entire tabs container
        gsap.from(tabsContainerRef.current, {
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 80%",
            toggleActions: "play reverse restart reset",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        // Animate grid items
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play reverse restart reset",
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3,
        });
      }, containerRef);

      return () => ctx.revert();
    }, []);

    // Tab switch animation
    useEffect(() => {
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, [isProject]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center flex-col items-center"
    >
      <div className="text-3xl py-10 pb-20 w-3/4">
        <div
          ref={tabsContainerRef}
          className=" flex h-27 justify-around backdrop-blur-lg shadow-[0_0_15px_2px_rgba(98,88,216,0.3)] rounded-lg p-4"
        >
          <div
            ref={projectsTabRef}
            className={`transition-all duration-300 rounded-lg w-1/2  ${
              isProject ? "bg-purple-950" : "hover:bg-purple-900/20"
            }`}
            onClick={() => setIsProject(true)}
          >
            <GradientText
              colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
              animationSpeed={3}
              showBorder={false}
              className="animate-gradient text-6xl"
            >
              <span className='font-bold'>Projects </span>
            </GradientText>
          </div>
          <div
            ref={certificatesTabRef}
            className={`transition-all duration-300 rounded-lg w-1/2 ${
              !isProject ? "bg-purple-950" : "hover:bg-purple-900/20"
            }`}
            onClick={() => setIsProject(false)}
          >
            <GradientText
              colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
              animationSpeed={3}
              showBorder={false}
              className="animate-gradient text-6xl"
            >
              <span className='font-bold'>Certificates</span>
            </GradientText>
          </div>
        </div>
      </div>
      <div
        className="flex w-full px-50 flex-wrap gap-10 justify-around"
        ref={gridRef}
      >
        {isProject ? (
          <>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Bento">
                <img src={img2} alt="" />
              </a>
              <div className="font-semibold pt-3">Bento Teachers Hub</div>
              <div className="text-gray-300">
                {" "}
                is a sleek and interactive web application built with
                JavaScript, inspired by the minimalistic Bento design style.
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Book-Reviews">
                <img src={img} alt="" />
              </a>
              <div className="font-semibold pt-3">Book.com</div>
              <span className="text-gray-300">
                {" "}
                is a React-based web application designed to help users discover
                the latest books across various genres, including Fiction,
                Non-Fiction, Sci-Fi, Romance, Mystery, and more.{" "}
              </span>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Blog-App">
                <img src={img1} alt="" />
              </a>
              <div className="font-semibold pt-3">BlogStar</div>
              <div className="text-gray-300">
                a blogging website to read latest blogs, create, edit and store
                your own blogs using ReactJs and Zustand for state management.
              </div>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/ChatApp">
                <img src={img3} alt="" />
              </a>
              <div className="font-semibold pt-3">Chat-App</div>
              <div className="text-gray-300">
                A chat website for live chatting using web-scokets.{" "}
              </div>
            </SpotlightCard>
          </>
        ) : (
          <>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Bento">
                <img src={img4} alt="" />
              </a>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Book-Reviews">
                <img src={img7} alt="" />
              </a>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/Blog-App">
                <img src={img5} alt="" />
              </a>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-120 h-90"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <a href="https://github.com/princi-2306/ChatApp">
                <img src={img6} alt="" />
              </a>
            </SpotlightCard>
          </>
        )}
      </div>
    </div>
  );
}

export default Skills
