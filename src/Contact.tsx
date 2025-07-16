import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import GradientText from './animations/GradientText';
import SpotlightCard from './animations/SpotlightCard';
import { Textarea } from "@/components/ui/textarea";
import { FaRegMessage } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from './components/ui/input'; 
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

  
  return (
    <div className="w-full flex gap-7 flex-col px-20 py-25 items-center">
      <GradientText
        colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
        animationSpeed={3}
        showBorder={false}
        className="animate-gradient text-6xl"
      >
        <div className="font-bold pt-20">Contact Me</div>
      </GradientText>
      <div className="py-4 text-xl">
        Got a question? Send me a message, and I'll get back to you soon.
      </div>
      <SpotlightCard
        className="custom-spotlight-card w-200"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <form action="https://formsubmit.co/priyanshimaurya23@gmail.com" method="POST" >
          <div className="flex flex-col gap-5 justify-center items-center">
            <GradientText
              colors={["#6258d8", "#904fdf", "#6258d8", "#904fdf", "#6258d8"]}
              animationSpeed={3}
              showBorder={false}
              className="animate-gradient text-4xl -translate-x-40 pt-4"
            >
              <div className="font-bold ">Get in touch</div>
            </GradientText>
            <CardDescription className="-translate-x-18">
              Have something to discuss? Send me a message and let's talk.
            </CardDescription>
            <div className="flex flex-col justify-center items-center gap-5 w-3/4">
              <div className="flex w-full gap-4 items-center ">
                <FaRegUser />
                <Input className=" h-15 " placeholder="username" name="username"/>
              </div>
              <div className="flex w-full gap-4 items-center ">
                <FiMail /> <Input className=" h-15" placeholder="your email" name="email"/>
              </div>
              <div className="flex gap-4 w-full justify-center items-center">
                <FaRegMessage />
                <div className="w-full">
                  <Textarea
                    className="min-h-30"
                    name="message"
                    placeholder="Type your message here"
                  />
                </div>
              </div>
              <button className="flex gap-3 py-4 rounded-lg w-[526px] translate-x-3 justify-center items-center bg-gradient-to-r from-purple-500 to-purple-800">
                <FaTelegramPlane /> <span>Send Message </span>
              </button>
            </div>
          </div>
        </form>
      </SpotlightCard>
      
    </div>
  );
}

export default Contact
