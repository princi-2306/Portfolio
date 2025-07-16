import React, { useEffect , useRef } from "react";
import TiltedCard from "./animations/TitledCard";
import img from "./assets/IMG_20250612_23450471~2.jpeg.jpg";
import AnimatedContent from "./animations/AnimatedContent";
import { motion } from "framer-motion";
import GradientText from "./animations/GradientText";
import StarBorder from "./animations/StarBorder";
import GlassIcons from "./animations/GlassIcons";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const items = [
    { icon: <CiLinkedin />, color: "pink", label: "LinkedIn" },
    { icon: <LuGithub />, color: "midPurple", label: "GitHub" },
    { icon: <FaInstagram />, color: "purple", label: "Instagram" },
  ];

    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);
  const iconsRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play reverse restart reset",
          markers: false, // set to true for debugging
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play reverse restart reset",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Content animation
      gsap.from([headingRef.current, paragraphRef.current], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play reverse restart reset",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        stagger: 0.3,
      });

      // Buttons animation
      gsap.from(buttonsRef.current, {
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
          toggleActions: "play reverse restart reset",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      // Icons animation
      gsap.from(iconsRef.current, {
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 80%",
          toggleActions: "play reverse restart reset",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

 
  return (
    <div className=" flex items-center flex-col gap-15 h-screen w-full px-20 overflow-hidden">
      <div ref={titleRef}>
        <GradientText
          colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
          animationSpeed={3}
          showBorder={false}
          className="animate-gradient text-6xl"
        >
          <div className="font-bold">About Me</div>
        </GradientText>
      </div>
      <div className="flex justify-between gap-30">
        <div ref={imageRef}>
          <TiltedCard
            imageSrc={img}
            altText="Priyanshi Maurya"
            captionText="Priyanshi - Developer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Priyanshi - Developer</p>
            }
          />
        </div>
        <div ref={contentRef}>
       
            <div  className="text-xl">
              <div ref={headingRef} className="text-gray-400 text-4xl font-bold max-w-2xl">
                Hi, I'm Priyanshi
              </div>
            <div ref={paragraphRef}  className="text-gray-200 text-justify max-w-2xl mx-auto leading-relaxed">
                a passionate frontend developer and computer science student who
                loves transforming creative ideas into interactive, visually
                appealing websites. Proficient in React.js, JavaScript, and
                Tailwind CSS, I enjoy crafting seamless user experiences with
                modern tech like Zustand for state management. Beyond frontend,
                I explore Node.js, Python, and Java, always eager to expand my
                knowledge. What excites me most is learning from diverse,
                innovative minds whether through collaboration, open-source
                projects, or experimenting with new frameworks.
              </div>
              <div className="flex pt-10 gap-4" ref={buttonsRef}>
                <div>
                  <StarBorder> View Resume</StarBorder>
                </div>
                <div>
                  <StarBorder> View Projects</StarBorder>
                </div>
              </div>
              
                <div ref={buttonsRef} style={{position: "relative" }} className="-translate-y-4">
                  <GlassIcons items={items} className="custom-class " />
                </div>
              
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
