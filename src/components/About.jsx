import React from 'react';
import aboutImg from '../assets/coder.jpg';
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
      <div className='pb-10 pt-10'>
        {/* Title */}
        <h1 className='my-20 text-center text-5xl font-bold'>
          About<span className='text-neutral-500'> Me</span>
        </h1>

        <div className='flex flex-wrap'>
          {/* Image Section */}
          <motion.div 
          whileInView={{opacity: 1,x: 0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 0.5}}
          className='w-full lg:w-1/2 lg:p-10 flex justify-center pb-12'>
           
            <img 
              className="rounded-2xl shadow-lg w-1/2 sm:w-1/3 md:w-1/2 lg:w-3/4" 
              src={aboutImg} 
              alt="About Me" 
            />
          </motion.div>

          {/* About Me Text */}
          <motion.div
          whileInView={{opacity:1, x: 0}}
          initial={{opacity:0 , x: 100}}
          transition={{duration: 0.5}}
          className='w-full lg:w-1/2 flex items-center'>
            <div className='text-center lg:text-left px-4 lg:px-12'>
              <p className='text-xl lg:text-2xl font-medium leading-relaxed'>
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
