import { useEffect, useRef, useState } from 'react'
import SpotlightCard from '../animations/SpotlightCard'
import img from '../assets/s1.png'
import img1 from '../assets/s2.png'
import img2 from '../assets/Screenshot 2025-07-11 010316.png'
import img3 from '../assets/Screenshot 2025-07-11 011055.png'
import GradientText from '../animations/GradientText'
import img4 from '../assets/certificate (1).png'
import img5 from '../assets/download.png'
import img6 from '../assets/Screenshot 2025-07-14 002834.png'
import img7 from '../assets/Screenshot 2025-07-14 012231.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// TypeScript interfaces
interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CertificateItem {
  id: number;
  image: string;
  link: string;
}

interface ProjectCardProps {
  item: ProjectItem | CertificateItem;
  isProject: boolean;
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Data structures for projects and certificates
const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Bento Teachers Hub",
    description: "is a sleek and interactive web application built with JavaScript, inspired by the minimalistic Bento design style.",
    image: img2,
    link: "https://github.com/princi-2306/Bento"
  },
  {
    id: 2,
    title: "Book.com",
    description: "is a React-based web application designed to help users discover the latest books across various genres, including Fiction, Non-Fiction, Sci-Fi, Romance, Mystery, and more.",
    image: img,
    link: "https://github.com/princi-2306/Book-Reviews"
  },
  {
    id: 3,
    title: "BlogStar",
    description: "a blogging website to read latest blogs, create, edit and store your own blogs using ReactJs and Zustand for state management.",
    image: img1,
    link: "https://github.com/princi-2306/Blog-App"
  },
  {
    id: 4,
    title: "Chat-App",
    description: "A chat website for live chatting using web-sockets.",
    image: img3,
    link: "https://github.com/princi-2306/ChatApp"
  }
];

const certificatesData: CertificateItem[] = [
  {
    id: 1,
    image: img4,
    link: "https://github.com/princi-2306/Bento"
  },
  {
    id: 2,
    image: img7,
    link: "https://github.com/princi-2306/Book-Reviews"
  },
  {
    id: 3,
    image: img5,
    link: "https://github.com/princi-2306/Blog-App"
  },
  {
    id: 4,
    image: img6,
    link: "https://github.com/princi-2306/ChatApp"
  }
];

// Reusable Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ item, isProject }) => (
  <SpotlightCard
    className="custom-spotlight-card w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:w-120 h-auto min-h-80 lg:min-h-90 p-4 sm:p-6"
    spotlightColor="rgba(0, 229, 255, 0.2)"
  >
    <a href={item.link} className="block h-full">
      <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg mb-4">
        <img 
          src={item.image} 
          alt={(item as ProjectItem).title || "Certificate"} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {isProject && (
        <div className="space-y-2">
          <div className="font-semibold text-lg sm:text-xl">{(item as ProjectItem).title}</div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {(item as ProjectItem).description}
          </div>
        </div>
      )}
    </a>
  </SpotlightCard>
);

// Reusable Tab Component
const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, children }) => (
  <div
    className={`transition-all duration-300 rounded-lg w-1/2 cursor-pointer p-2 sm:p-4 text-center ${
      isActive ? "bg-purple-950" : "hover:bg-purple-900/20"
    }`}
    onClick={onClick}
  >
    <GradientText
      colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
      animationSpeed={3}
      showBorder={false}
      className="animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      <span className='font-bold'>{children}</span>
    </GradientText>
  </div>
);

const Skills = () => {
  const [isProject, setIsProject] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state to visible for elements
      gsap.set([tabsContainerRef.current, gridRef.current?.children], {
        opacity: 1,
        y: 0
      });

      // Animate the entire tabs container
      gsap.fromTo(tabsContainerRef.current, 
        {
          y: 30,
          // opacity: 0
        },
        {
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            refreshPriority: 0,
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Animate grid items
      if (gridRef.current?.children && gridRef.current.children.length > 0) {
        gsap.fromTo(gridRef.current.children,
          {
            y: 50,
            // opacity: 0
          },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              refreshPriority: 1,
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.3,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Tab switch animation - separate effect for tab switching
  useEffect(() => {
    if (gridRef.current?.children && gridRef.current.children.length > 0) {
      // Kill any existing animations on these elements
      gsap.killTweensOf(gridRef.current.children);
      
      // Animate the tab switch
      gsap.fromTo(gridRef.current.children,
        {
          y: 20,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }
  }, [isProject]);

  const currentData: (ProjectItem | CertificateItem)[] = isProject ? projectsData : certificatesData;

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
          <TabButton
            isActive={isProject}
            onClick={() => setIsProject(true)}
          >
            Projects
          </TabButton>
          <TabButton
            isActive={!isProject}
            onClick={() => setIsProject(false)}
          >
            Certificates
          </TabButton>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={gridRef}
      >
        {currentData.map((item) => (
          <ProjectCard 
            key={item.id} 
            item={item} 
            isProject={isProject} 
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;