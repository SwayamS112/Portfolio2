import React from 'react';
import { RiReactjsLine, RiGithubFill } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiBootstrap, DiJavascript1 } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { motion } from "framer-motion";

const techs = [
  { name: "React", icon: <RiReactjsLine className="text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-amber-300" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNode className="text-green-500" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "GitHub", icon: <RiGithubFill className="text-white" /> },
];

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Tech = () => {
  return (
    <div className="pb-32 pt-10">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.3 }}
        className="my-20 text-center text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>

      {/* Tech Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.3 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2 + index * 0.2)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-900 p-6 bg-neutral-900/50 shadow-lg cursor-pointer transition-transform hover:scale-110"
          >
            <div className="text-6xl">{tech.icon}</div>
            {/* Hover Label */}
            <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-neutral-800 text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
