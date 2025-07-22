import profilepic from '../assets/aadii.jpg';
import { HERO_CONTENT } from '../constants';
import { delay, motion, stagger } from 'framer-motion';
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            < motion.img
              src={profilepic}
              alt="Aaditya Sharma"
              className="border border-b-stone-900 rounded-3xl
              h-[520px]"
              width={650} height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}

            />

          </div>

        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='w-full lg:items-start mt-10 ml-4'>
            <motion.h2
              variants={childVariants}

              className='pb-2 text-3xl tracking-tighter lg:text-6xl'>Aaditya Sharma</motion.h2>
            <motion.span
              variants={childVariants}

            className='pb-2 text-4xl tracking-tighter lg:text-4xl'>Fronted Developer</motion.span>
            <motion.p 
              variants={childVariants}
            className='my-2 max-w-[550px] py-7 text-xl leading-relaxed tracking-tighter font-stretch-40%  mb-[35px]'>
              {HERO_CONTENT}
            </motion.p>
            <motion.a 
              variants={childVariants}
            href='/resume.pdf' target="_blank" rel="noopener noreferrer"
              download
              className='bg-white rounded-full p-4 text-shadow-stone-400  ml-[90px]   text-lg text-black'
            >
              Download Resume

            </motion.a>



          </motion.div>


        </div>
      </div>

    </div>
  )
}

export default Hero
