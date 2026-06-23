// import { useEffect, useRef, useState } from "react";
// import GradientText from "../animations/GradientText";
// import PixelTransition from "../animations/PixelTransition";
// import img from "../assets/legalAid.png";
// import img1 from "../assets/s2.png";
// import img2 from "../assets/image.png";
// import img3 from "../assets/chatApp.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // TypeScript interfaces
// interface ProjectItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// interface TabButtonProps {
//   isActive: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }

// // Data structures for projects
// const projectsData: ProjectItem[] = [
//   {
//     id: 1,
//     title: "Quizzii",
//     description:
//       "is an AI Quiz Generator, that takes in various inputs like pdf, text and link to generate quiz which is dowloadable and can be re-attempted.",
//     image: img2,
//     link: "https://quizapp-1-ebrn.onrender.com/",
//   },
//   {
//     id: 2,
//     title: "Chat-App",
//     description:
//       "A chat website for live chatting using web-sockets.The app supports 1:1 and group chats, message history, and typing indicators, providing a seamless user experience.",
//     image: img3,
//     link: "https://github.com/princi-2306/ChatApp",
//   },
//   {
//     id: 3,
//     title: "LegalAid",
//     description:
//       "a legal aid provider, which handles all legal documents ans suggests laywers, consultants and supervisors to talk to for any legal disputes.",
//     image: img,
//     link: "https://github.com/THUNDERBLD/LexIQ",
//   },
//   {
//     id: 4,
//     title: "BlogStar",
//     description:
//       "a blogging website to read latest blogs, create, edit and store your own blogs using ReactJs and Zustand for state management.",
//     image: img1,
//     link: "https://github.com/princi-2306/Blog-App",
//   },
// ];

// // Project card component with PixelTransition
// const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
//   // First content (initial state)
//   const firstContent = (
//     <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-900/80 to-blue-900/80">
//       <div className="text-center">
//         <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
//         <p className="text-gray-200 text-sm">
//           {item.description.substring(0, 80)}...
//         </p>
//       </div>
//     </div>
//   );

//   // Second content (revealed state)
//   const secondContent = (
//     <a
//       href={item.link}
//       className="block w-full h-full cursor-pointer"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <div className="w-full h-full relative">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
//           <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
//           <p className="text-gray-200 text-sm text-center">
//             {item.description}
//           </p>
//           <div className="mt-4 px-4 py-2 bg-purple-600 rounded-lg text-white text-sm">
//             View Project →
//           </div>
//         </div>
//       </div>
//     </a>
//   );

//   return (
//     <PixelTransition
//       firstContent={firstContent}
//       secondContent={secondContent}
//       gridSize={8}
//       pixelColor="rgba(168, 85, 247, 0.8)"
//       animationStepDuration={0.4}
//       aspectRatio="75%"
//       className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer"
//     />
//   );
// };

// // Reusable Tab Component
// const TabButton: React.FC<TabButtonProps> = ({
//   isActive,
//   onClick,
//   children,
// }) => (
//   <div
//     className={`transition-all duration-300 rounded-lg w-full cursor-pointer p-2 sm:p-4 text-center ${
//       isActive ? "bg-purple-950" : "hover:bg-purple-900/20"
//     }`}
//     onClick={onClick}
//   >
//     <GradientText
//       colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
//       animationSpeed={3}
//       showBorder={false}
//       className="animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
//     >
//       <span className="font-bold">{children}</span>
//     </GradientText>
//   </div>
// );

// const Skills = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const tabsContainerRef = useRef<HTMLDivElement>(null);
//   const gridRef = useRef<HTMLDivElement>(null);

//   // Animate tabs container and grid items
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial hidden state
//       gsap.set([tabsContainerRef.current, gridRef.current], {
//         opacity: 0,
//         y: 30,
//       });

//       // Animate tabs container
//       gsap.to(tabsContainerRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: tabsContainerRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none none",
//         },
//       });

//       // Animate grid items
//       if (gridRef.current) {
//         gsap.to(gridRef.current, {
//           opacity: 1,
//           duration: 0.6,
//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "restart none none reverse",
//           },
//         });

//         gsap.from(gridRef.current.children, {
//           y: 50,
//           opacity: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "restart none none reverse",
//           },
//         });
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full flex justify-center flex-col items-center px-4 sm:px-6 lg:px-8"
//       id="projects"
//     >
//       {/* Tab Navigation */}
//       <div className="w-full max-w-4xl py-6 sm:py-8 lg:py-10 pb-10 sm:pb-16 lg:pb-20">
//         <div
//           ref={tabsContainerRef}
//           className="flex h-auto min-h-20 sm:min-h-24 lg:min-h-27 justify-around backdrop-blur-lg shadow-[0_0_15px_2px_rgba(98,88,216,0.3)] rounded-lg p-2 sm:p-4"
//         >
//           <TabButton isActive={true} onClick={() => {}}>
//             Projects
//           </TabButton>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
//         ref={gridRef}
//       >
//         {projectsData.map((item) => (
//           <ProjectCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import { useEffect, useRef} from "react";
import GradientText from "../animations/GradientText";
import PixelTransition from "../animations/PixelTransition";
import img from "../assets/legalAid.png";
import img1 from "../assets/s2.png";
import img2 from "../assets/image.png";
import img3 from "../assets/chatApp.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TypeScript interfaces
interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Data structures for projects
const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Quizzii",
    description:
      "is an AI Quiz Generator, that takes in various inputs like pdf, text and link to generate quiz which is dowloadable and can be re-attempted.",
    image: img2,
    link: "https://quizapp-1-ebrn.onrender.com/",
  },
  {
    id: 2,
    title: "Chat-App",
    description:
      "A chat website for live chatting using web-sockets.The app supports 1:1 and group chats, message history, and typing indicators, providing a seamless user experience.",
    image: img3,
    link: "https://github.com/princi-2306/ChatApp",
  },
  {
    id: 3,
    title: "LegalAid",
    description:
      "a legal aid provider, which handles all legal documents ans suggests laywers, consultants and supervisors to talk to for any legal disputes.",
    image: img,
    link: "https://github.com/THUNDERBLD/LexIQ",
  },
  {
    id: 4,
    title: "BlogStar",
    description:
      "a blogging website to read latest blogs, create, edit and store your own blogs using ReactJs and Zustand for state management.",
    image: img1,
    link: "https://github.com/princi-2306/Blog-App",
  },
];

// Project card component with PixelTransition
const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  // First content (initial state - shows image)
  const firstContent = (
    <div className="w-full h-full relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
        <h3 className="text-white text-2xl font-bold">{item.title}</h3>
      </div>
    </div>
  );

  // Second content (revealed state - shows content with translucent background)
  const secondContent = (
    <a
      href={item.link}
      className="block w-full h-full cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full h-full relative overflow-hidden">
        {/* Background image with blur */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover scale-110 blur-sm"
        />

        {/* Translucent overlay */}
        <div className="absolute inset-0 bg-zinc-900 backdrop-blur-md flex flex-col items-center justify-center p-6">
          <h3 className="text-3xl font-bold text-white mb-3 text-center">
            {item.title}
          </h3>
          <p className="text-gray-100 text-base text-center mb-4 leading-relaxed">
            {item.description}
          </p>
          <div className="mt-2 px-6 py-2.5 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-lg text-white text-sm font-semibold hover:from-zinc-700 hover:to-zinc-900 transition-all duration-300 shadow-lg">
            View Project →
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <PixelTransition
      firstContent={firstContent}
      secondContent={secondContent}
      gridSize={8}
      pixelColor="rgba(82,82,92,1)"
      animationStepDuration={0.4}
      aspectRatio="75%"
      className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300"
    />
  );
};

// Reusable Tab Component
const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <div
    className={`transition-all duration-300 rounded-lg w-full cursor-pointer p-2 sm:p-4 text-center ${
      isActive ? "bg-zinc-900/20" : "hover:bg-purple-900/20"
    }`}
    onClick={onClick}
  >
    <GradientText
      colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
      animationSpeed={3}
      showBorder={false}
      className="animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      <span className="font-bold">{children}</span>
    </GradientText>
  </div>
);

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Animate tabs container and grid items
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden state
      gsap.set([tabsContainerRef.current, gridRef.current], {
        opacity: 0,
        y: 30,
      });

      // Animate tabs container
      gsap.to(tabsContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tabsContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate grid items
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
          },
        });

        gsap.from(gridRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center flex-col items-center px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      {/* Tab Navigation */}
      <div className="w-full max-w-4xl py-6 sm:py-8 lg:py-10 pb-10 sm:pb-16 lg:pb-20">
        <div
          ref={tabsContainerRef}
          className="flex h-auto min-h-20 sm:min-h-24 lg:min-h-27 justify-around backdrop-blur-lg shadow-[0_0_15px_2px_rgba(98,88,216,0.3)] rounded-lg p-2 sm:p-4"
        >
          <TabButton isActive={true} onClick={() => {}}>
            Projects
          </TabButton>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        ref={gridRef}
      >
        {projectsData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;