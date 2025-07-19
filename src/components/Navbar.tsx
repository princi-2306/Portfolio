import { useState } from 'react'
import {motion} from "framer-motion"
import {FiGithub, FiLinkedin, FiMenu, FiX} from "react-icons/fi"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-6 pt-8 md:pt-0 md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 5,
            duration: 3,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 ">
            P
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.div>

        <div className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Contacts"].map((items, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 5 + index * 0.2,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 front-medium transition-colors duration-300 group"
              href={`#${items.toLowerCase()}`}
            >
              {items}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 "></span>
            </motion.a>
          ))}
        </div>
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            href="https://github.com/princi-2306"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            href="https://www.linkedin.com/in/priyanshi-maurya-87141a2a4/"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>
      {/* {mobile menu} */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 1.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Contacts", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const target = document.getElementById(item.id);
                if (target) {
                  toggleMenu();
                  setTimeout(() => {
                    
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start", 
                    });
                  }, 100);
                }
              }}
              className="text-left text-gray-300 font-medium py-2"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border=gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/princi-2306" target="_blank">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshi-maurya-87141a2a4/"
              target="_blank"
            >
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar
