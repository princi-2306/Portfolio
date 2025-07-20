import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Particles from "../animations/Particles";
import GradientText from "../animations/GradientText";
import StarBorder from "../animations/StarBorder";
import gsap from "gsap";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const LandingPage = () => {
  const button1Ref = useRef<HTMLDivElement>(null);
  const button2Ref = useRef<HTMLDivElement>(null);
  const [currentAnimation, setCurrentAnimation] = useState("Coding.lottie");

  useEffect(() => {
    // GSAP animation for buttons
    gsap.set([button1Ref.current, button2Ref.current], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(
      button1Ref.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      5
    ).to(
      button2Ref.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      5
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  // Animation switching logic - change once after 1 second
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentAnimation("g5.lottie");
    }, 4000); // Change to g5.lottie after 1 second

    return () => clearTimeout(timeout);
  }, []);

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection =
      document.getElementById("contact1") ||
      document.getElementById("contact2");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection =
      document.getElementById("project1") ||
      document.getElementById("project2");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          className="h-screen w-full absolute"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen pt-20 lg:pt-0 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 5, duration: 3 }}
              className="mb-6"
            >
              <div className="text-center lg:text-left">
                <GradientText
                  colors={[
                    "#6258d8",
                    "#904fdf",
                    "#6258d8",
                    "#904fdf",
                    "#6258d8",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight inline-block"
                >
                  <div>Hey,</div>
                  <div>this is Priyanshi</div>
                </GradientText>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              className="space-y-4 mb-8"
            >
              <div className="text-center lg:text-left">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                  Building creative and reliable solutions to your problem.
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  A computer science student.
                </p>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <div ref={button1Ref} className="cursor-pointer">
                <a href="#contacts">
                  <StarBorder
                    as="button"
                    className="w-full sm:w-auto px-6 py-3 hover:scale-105 transition-transform duration-300"
                    color="cyan"
                    speed="5s"
                    onClick={scrollToContact}
                  >
                    <div className="flex items-center justify-center gap-2 text-white font-medium">
                      <span>Contact</span>
                      <MdMailOutline className="text-lg" />
                    </div>
                  </StarBorder>
                </a>
              </div>

              <div ref={button2Ref} className="cursor-pointer">
                <a href="#projects">
                  <StarBorder
                    as="button"
                    className="w-full sm:w-auto px-6 py-3 hover:scale-105 transition-transform duration-300"
                    color="cyan"
                    speed="5s"
                    onClick={scrollToProjects}
                  >
                    <div className="flex items-center justify-center gap-2 text-white font-medium">
                      <span>Projects</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </div>
                  </StarBorder>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Lottie Animation */}
          <div
            className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 }}
              className="lg:h-150 w-200"
            >
              <DotLottieReact
                key={currentAnimation} // Force re-render when animation changes
                src={currentAnimation}
                loop
                autoplay
                className="scale-150 lg:translate-y-30"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;