import React from 'react';
import { PROJECTS } from '../constants';
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className=" pb-12">
      {/* Title */}
      <motion.h1
      whileInView={{opacity: 1,y: 0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5 }}
      className="my-16 text-center text-5xl font-extrabold text-white tracking-wide">
        My Projects
      </motion.h1>

      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap items-center justify-center lg:justify-start max-w-4xl"
          >
            {/* Image Section */}
            <motion.div 
            whileInView={{opacity: 1,x: 0}}
            initial={{opacity: 0 , x: -100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div 
             whileInView={{opacity: 1,x: 0}}
             initial={{opacity: 0 , x: 100}}
             transition={{duration: 1.3}}
            className="w-full max-w-xl lg:w-3/4 lg:pl-8 text-center lg:text-left">
              <h4 className="mb-2 text-2xl font-bold text-white">{project.title}</h4>
              <p className="mb-4 text-neutral-400 leading-relaxed">{project.description}</p>

              {/* Technologies Used */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel=""
                className="inline-block mt-2 rounded-lg bg-blue-600 px-5 py-2 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-700 shadow-md"
              >
                🔗 View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
