import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import GradientText from '../animations/GradientText';
import SpotlightCard from '../animations/SpotlightCard';
import { Textarea } from "@/components/ui/textarea";
import { FaRegMessage } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import {
  CardDescription
} from "@/components/ui/card";
import { Input } from '../components/ui/input'; 
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useState, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  // Refs for GSAP animations
  const contactRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const formTitleRef = useRef<HTMLDivElement>(null);
  const formDescRef = useRef<HTMLDivElement>(null);
  const usernameFieldRef = useRef<HTMLDivElement>(null);
  const emailFieldRef = useRef<HTMLDivElement>(null);
  const messageFieldRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, cardRef.current, contactInfoRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set([formTitleRef.current, formDescRef.current], {
        opacity: 0,
        y: 30
      });

      gsap.set([usernameFieldRef.current, emailFieldRef.current, messageFieldRef.current, submitButtonRef.current], {
        opacity: 0,
        x: -30
      });

      // Main title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Subtitle animation
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Card container animation
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Form title animation
      gsap.to(formTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Form description animation
      gsap.to(formDescRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formDescRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Form fields animations with stagger effect
      const formFields = [usernameFieldRef.current, emailFieldRef.current, messageFieldRef.current, submitButtonRef.current];
      
      gsap.to(formFields, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: usernameFieldRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Contact info animation
      gsap.to(contactInfoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating animation for the form card
      gsap.to(cardRef.current, {
        y: "+=10",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play pause resume pause"
        }
      });

      // Hover animations for form fields
      const addHoverAnimation = (element: HTMLElement | null) => {
        if (!element) return;
        
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      };

      addHoverAnimation(usernameFieldRef.current);
      addHoverAnimation(emailFieldRef.current);
      addHoverAnimation(messageFieldRef.current);

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add submit animation
    gsap.to(submitButtonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({ username: '', email: '', message: '' });
      
      // Success animation
      gsap.fromTo(cardRef.current, 
        { borderColor: "rgba(0, 229, 255, 0.2)" },
        { 
          borderColor: "rgba(34, 197, 94, 0.5)",
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power2.out"
        }
      );
    }, 2000);
  };

  return (
    <div 
    ref={contactRef}
    id="contacts"
    className="w-full mt-16 md:mt-0 flex gap-4 md:gap-7 flex-col px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-25 items-center min-h-screen">
      {/* Main Title */}
      <div ref={titleRef}>
        <GradientText
          colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
          animationSpeed={3}
          showBorder={false}
          className="animate-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
        >
          <div className="font-bold pt-10 md:pt-20">Contact Me</div>
        </GradientText>
      </div>

      {/* Subtitle */}
      <div ref={subtitleRef} className="py-2 md:py-4 text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
        Got a question? Send me a message, and I'll get back to you soon.
      </div>

      {/* Contact Form Card */}
      <div ref={cardRef}>
        <SpotlightCard
          className="custom-spotlight-card w-full max-w-2xl mx-auto"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <form 
            action="https://formsubmit.co/priyanshimaurya23@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 md:p-10"
          >
            <div className="flex flex-col gap-4 sm:gap-5 justify-center items-center">
              {/* Form Title */}
              <div ref={formTitleRef}>
                <GradientText
                  colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="animate-gradient text-2xl sm:text-3xl md:text-4xl text-center"
                >
                  <div className="font-bold">Get in touch</div>
                </GradientText>
              </div>

              {/* Form Description */}
              <CardDescription ref={formDescRef} className="text-center text-sm sm:text-base max-w-md">
                Have something to discuss? Send me a message and let's talk.
              </CardDescription>

              {/* Form Fields */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 w-full max-w-md">
                {/* Username Field */}
                <div ref={usernameFieldRef} className="flex w-full gap-3 sm:gap-4 items-center">
                  <FaRegUser className="text-gray-600 dark:text-gray-300 flex-shrink-0" />
                  <Input 
                    className="h-12 sm:h-15 flex-1" 
                    placeholder="Your Name" 
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Email Field */}
                <div ref={emailFieldRef} className="flex w-full gap-3 sm:gap-4 items-center">
                  <FiMail className="text-gray-600 dark:text-gray-300 flex-shrink-0" />
                  <Input 
                    className="h-12 sm:h-15 flex-1" 
                    placeholder="Your Email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Message Field */}
                <div ref={messageFieldRef} className="flex gap-3 sm:gap-4 w-full items-start">
                  <FaRegMessage className="text-gray-600 dark:text-gray-300 flex-shrink-0 mt-3" />
                  <div className="w-full">
                    <Textarea
                      className="min-h-24 sm:min-h-30 resize-none"
                      name="message"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  ref={submitButtonRef}
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex gap-3 py-3 sm:py-4 px-6 rounded-lg w-full max-w-sm justify-center items-center bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 transition-all duration-300 cursor-pointer text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaTelegramPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hidden FormSubmit Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
          </form>
        </SpotlightCard>
      </div>

      {/* Additional Contact Info */}
      <div ref={contactInfoRef} className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Or reach out directly at <span className="text-purple-600 dark:text-purple-400">priyanshimaurya23@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Contact;