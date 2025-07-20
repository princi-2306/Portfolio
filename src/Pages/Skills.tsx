import { useEffect, useRef, useState } from 'react'
import { Modal, IconButton, Box, Backdrop } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from '@mui/icons-material/Fullscreen'
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
  onCertificateClick?: (certificate: CertificateItem) => void;
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
    description:
      "is a sleek and interactive web application built with JavaScript, inspired by the minimalistic Bento design style.",
    image: img2,
    link: "https://github.com/princi-2306/Bento",
  },
  {
    id: 2,
    title: "Book.com",
    description:
      "is a React-based web application designed to help users discover the latest books across various genres, including Fiction, Non-Fiction, Sci-Fi, Romance, Mystery, and more.",
    image: img,
    link: "https://github.com/princi-2306/Book-Reviews",
  },
  {
    id: 3,
    title: "BlogStar",
    description:
      "a blogging website to read latest blogs, create, edit and store your own blogs using ReactJs and Zustand for state management.",
    image: img1,
    link: "https://github.com/princi-2306/Blog-App",
  },
  {
    id: 4,
    title: "Chat-App",
    description:
      "A chat website for live chatting using web-sockets.The app supports 1:1 and group chats, message history, and typing indicators, providing a seamless user experience.",
    image: img3,
    link: "https://github.com/princi-2306/ChatApp",
  },
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

// Reusable Card Component with improved certificate preview
const ProjectCard: React.FC<ProjectCardProps> = ({ item, isProject, onCertificateClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!isProject && onCertificateClick) {
      e.preventDefault();
      onCertificateClick(item as CertificateItem);
    }
  };

  if (!isProject) {
    // Certificate card with hover effects like the Certificate component
    return (
      <SpotlightCard
        className="custom-spotlight-card w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:w-120 h-auto min-h-60 lg:min-h-90 p-4 sm:p-6"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-5px)",
              "& .overlay": {
                opacity: 1,
              },
              "& .hover-content": {
                transform: "translate(-50%, -50%)",
                opacity: 1,
              },
              "& .certificate-image": {
                filter: "contrast(1.05) brightness(1) saturate(1.1)",
              },
            },
          }}
          onClick={handleClick}
        >
          {/* Certificate Image with Initial Filter */}
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                zIndex: 1,
              },
            }}
          >
            <img
              className="certificate-image"
              src={item.image}
              alt="Certificate"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                transition: "filter 0.3s ease",
                borderRadius: "8px",
              }}
            />
          </Box>

          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            {/* Hover Content */}
            <Box
              className="hover-content"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                opacity: 0,
                transition: "all 0.4s ease",
                textAlign: "center",
                width: "100%",
                color: "white",
              }}
            >
              <FullscreenIcon
                sx={{
                  fontSize: 40,
                  mb: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                }}
              />
              <Box
                sx={{
                  fontWeight: 600,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  fontSize: "1.25rem",
                }}
              >
                View Certificate
              </Box>
            </Box>
          </Box>
        </Box>
      </SpotlightCard>
    );
  }

  // Project card (unchanged)
  return (
    <SpotlightCard
      className="custom-spotlight-card w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:w-120 h-auto min-h-60 lg:min-h-90 p-4 sm:p-6"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <a 
        href={item.link}
        className="block h-full cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg mb-4">
          <img 
            src={item.image} 
            alt={(item as ProjectItem).title} 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-lg sm:text-xl text-white">
            {(item as ProjectItem).title}
          </div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {(item as ProjectItem).description}
          </div>
        </div>
      </a>
    </SpotlightCard>
  );
};

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
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Handle certificate click
  const handleCertificateClick = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Animate tabs container
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden state
      gsap.set([tabsContainerRef.current, gridRef.current], {
        opacity: 0,
        y: 30
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
          toggleActions: "play none none none"
        }
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

  // Tab switch animation - separate effect for tab switching
  useEffect(() => {
    if (gridRef.current?.children && gridRef.current.children.length > 0) {
      // Kill any existing animations on these elements
      gsap.killTweensOf(gridRef.current.children);
      
      // Animate the tab switch
      gsap.fromTo(gridRef.current.children,
        {
          x: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
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
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6  lg:gap-8 xl:gap-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        ref={gridRef}
      >
        {currentData.map((item) => (
          <ProjectCard 
            key={item.id} 
            item={item} 
            isProject={isProject}
            onCertificateClick={handleCertificateClick}
          />
        ))}
      </div>

      {/* Certificate Preview Modal - Using Material-UI Modal like Certificate component */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="certificate-modal"
        aria-describedby="certificate-preview"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            m: 0,
            p: 0,
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1)",
              },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Image */}
          {selectedCertificate && (
            <img
              src={selectedCertificate.image}
              alt="Certificate Full View"
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "90vh",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Skills;