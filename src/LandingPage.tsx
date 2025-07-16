import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { easeIn, motion } from "framer-motion";
import SplitText from "./animations/SplitText";
import Particles from "./animations/Particles";
import GradientText from "./animations/GradientText";
import StarBorder from "./animations/StarBorder";
import gsap from "gsap";
import { CgWebsite } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const LandingPage = () => {
  const handleAnimationComplete = () => {
    console.log("Web Developer");
  };
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  useEffect(() => {
    // Create a timeline for better control
    gsap.set([button1Ref.current, button2Ref.current], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Add the button animations with stagger
    tl.to(
      button1Ref.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      1.8
    ) // Starts at 1.8s
      .to(
        button2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        2.1
      ); // starts 1.8s after the timeline begins

    // Alternative with more control:
    // tl.to(button1Ref.current, { opacity: 1, y: 0, duration: 0.5 }, "+=1.8")
    //   .to(button2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, "+=0.3");
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      <div className="fixed inset-0 -z-10">
        <Particles
          className="h-screen w-full absolute "
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
      <div className="">
        <Navbar />
        <div className="flex relative justify-between items-center w-full pt-20 pl-5">
          <div className="w-3/4">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 45 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <GradientText
                colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
                animationSpeed={3}
                showBorder={false}
                className="animate-gradient -translate-x-70 text-6xl flex gap-4"
              >
                <div>Hi ,</div>
                <div>this is Priyanshi</div>
              </GradientText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <SplitText
                text="Building creative and reliable solutions to your problem. "
                className="text-xl font-semibold pt-3 "
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <br />
              <SplitText
                text="A computer science student."
                className="text-3xl font-semibold  "
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </motion.div>
            <div className="flex gap-3 pt-4">
              <div ref={button1Ref}>
                <StarBorder
                  as="button"
                  className="custom-class w-40"
                  color="cyan"
                  speed="5s"
                >
                  <div> Contact </div>{" "}
                  <div>
                    {" "}
                    <MdMailOutline />
                  </div>
                </StarBorder>
              </div>
              <div ref={button2Ref}>
                <StarBorder
                  as="button"
                  className="custom-class w-40"
                  color="cyan"
                  speed="5s"
                >
                  <div>Projects </div>{" "}
                  <div>
                    {" "}
                    <FaExternalLinkAlt />
                  </div>
                </StarBorder>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="h-150 w-200 "
          >
            <DotLottieReact
              src="https://lottie.host/288c4f1c-00d1-4f83-84a5-e80d3754bee5/g57yy07orS.lottie"
              loop
              autoplay
              className="scale-220 -translate-x-10 translate-y-30"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
