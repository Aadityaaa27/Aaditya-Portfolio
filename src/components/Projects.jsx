
import { PROJECTS } from '../constants/index.js';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='pb-4 mt-7'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl mb-13 mt-7'>Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-10 flex   flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, }}
              className='w-full lg:w-1/4  mt-26 '>
              <img src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6-rounded "
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-4 text-stone-400'>
                {project.title}
              </h3>
              <p className='mb-4 text-stone-400'>
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 mb-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-3 py-1 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}

      </div>
    </div>

  )
}

export default Projects
