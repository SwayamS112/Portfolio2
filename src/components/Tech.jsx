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
        <h1 className='my-20 text-center text-5xl font-bold'>
          Technologies
        </h1>

        {/* Tech Icons */}
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <SiMongodb className="text-6xl text-green-500" />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <DiJavascript1 className="text-6xl text-amber-300" />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <SiTailwindcss className="text-6xl text-blue-400 " />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <FaNode className="text-6xl text-green-500 " />
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300'>
            <SiTypescript className="text-6xl text-blue-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
