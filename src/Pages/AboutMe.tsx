import { useEffect, useRef } from "react";
import TiltedCard from "../animations/TitledCard";
import img from "../assets/IMG_20250612_23450471~2.jpeg.jpg";
import GradientText from "../animations/GradientText";
import StarBorder from "../animations/StarBorder";
import GlassIcons from "../animations/GlassIcons";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const items = [
    { icon: <CiLinkedin />, color: "pink", label: "LinkedIn", link: "https://www.linkedin.com/in/priyanshi-maurya-87141a2a4/" },
    { icon: <LuGithub />, color: "midPurple", label: "GitHub", link: "https://github.com/princi-2306" },
    { icon: <FaInstagram />, color: "purple", label: "Instagram", link: "https://www.instagram.com/princi_2306/" },
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "restart none none reverse", // <=== key change
          markers: false,
        },
      });

      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(paragraphRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(buttonsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(iconsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col items-center gap-12 min-h-screen w-full px-6 sm:px-15 md:px-20 overflow-hidden py-12"
    >
      {/* Title */}
      <div ref={titleRef}>
        <GradientText
          colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
          animationSpeed={3}
          showBorder={false}
          className="animate-gradient text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        >
          <div>About Me</div>
        </GradientText>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:gap-30 gap-9 items-center  w-full">
        {/* Image Card */}
        <div
          ref={imageRef}
          className="md:ml-64 md:mb-56 flex justify-center lg:justify-start w-full lg:w-auto"
        >
          <TiltedCard
            imageSrc={img}
            altText="Priyanshi Maurya"
            captionText="Priyanshi - Developer"
            containerHeight="290px"
            containerWidth="290px"
            imageHeight="290px"
            imageWidth="290px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text mx-16">
                Priyanshi - Developer
              </p>
            }
          />
        </div>

        {/* Text Content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center  gap-6 max-w-xl sm:w-full "
        >
          <div
            ref={headingRef}
            className="text-gray-400 text-3xl sm:text-4xl font-bold cursor-default"
          >
            Hi, I'm Priyanshi
          </div>
          <div
            ref={paragraphRef}
            className="text-gray-200 text-justify leading-relaxed text-base sm:text-lg cursor-default sm:px-5"
          >
            A frontend developer and computer science student who
            loves transforming creative ideas into interactive, visually
            appealing websites. Proficient in React.js, JavaScript, and Tailwind
            CSS, I enjoy crafting seamless user experiences with modern tech
            like Zustand for state management. Beyond frontend, I explore
            Node.js, Python, and Java, always eager to expand my knowledge. What
            excites me most is learning from diverse, innovative minds—whether
            through collaboration, open-source projects, or experimenting with
            new frameworks.
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 w-full " ref={buttonsRef}>
            <a
              href="https://docs.google.com/document/d/17ZVLl7NC_yEKjo-ooYwgXJGCDmnsgFLQeEGuau2K3mQ/edit?usp=sharing"
              target="_blank"
            >
              <StarBorder>View Resume</StarBorder>
            </a>
            <a href="#projects">
              <StarBorder>View Projects</StarBorder>
            </a>
          </div>

          {/* Social Icons */}
          <div ref={iconsRef} className="md:auto w-full lg:w-32 ">
            <GlassIcons
              items={items}
              className="custom-class w-full sm:justify-start sm:max-w-[280px] lg:max-w-none sm:py-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
