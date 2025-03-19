import React from 'react';
import { PARA_CONTENT } from '../constants';
import profilePic from '../assets/profilePic.png';
import {motion} from "framer-motion"
const container = (delay) =>({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});

const Para = () => {
  return (
    <div className="pb-10 lg:mb-16 flex flex-col items-center text-center lg:text-left lg:flex-row">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 sm:px-10 lg:px-16">
  
      <motion.h1
      variants={container(0)}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-4xl lg:text-5xl font-thin tracking-tight mb-15 lg:mt-16 font-serif">
      I'm Swayam Sood
      </motion.h1>

        <motion.h1 
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 font-serif">
          <span className="text-white">Full Stack</span>{' '}
          <span className="text-purple-500">Developer</span>
        </motion.h1>
      
        <motion.p 
       variants={container(1)}
       initial="hidden"
       animate="visible"
       className="text-gray-300 text-lg sm:text-xl lg:text-xl font-light leading-relaxed font-serif">
          {PARA_CONTENT}
        </motion.p>
      </div>

      {/* Right Side - Profile Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <motion.img
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay: 1.2}}
          className="w-72 sm:w-80 lg:w-96 rounded-lg shadow-lg "
          src={profilePic}
          alt="Swayam Sood"
        />
      </div>
    </div>
  );
};

export default Para;
