import React from 'react';
import {RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import {animate, motion} from "framer-motion"

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Tech = () => {
  return (
    <>
      <div className=' pb-40 pt-10'>
        {/* Title */}
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.3}}
        className='my-20 text-center text-5xl font-bold'>
          Technologies
        </motion.h1>

        {/* Tech Icons */}
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1.3}}
        className='flex flex-wrap items-center justify-center gap-6'>
        
          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg'>
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </motion.div>
          
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg'>
            <SiMongodb className="text-6xl text-green-500" />
          </motion.div>
         
          <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg'>
            <DiJavascript1 className="text-6xl text-amber-300" />
          </motion.div>
         
          <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg'>
            <SiTailwindcss className="text-6xl text-blue-400 " />
          </motion.div>
          
          <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg'>
            <FaNode className="text-6xl text-green-500 " />
          </motion.div>
         
          <motion.div 
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg '>
            <SiTypescript className="text-6xl text-blue-500" />
          </motion.div>
        
        </motion.div>
      </div>
    </>
  );
};

export default Tech;
