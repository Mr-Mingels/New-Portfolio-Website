import React from 'react'
import '../styles/Skills.css'
import Transition from './Transition'
import { technologies } from '../constants/index.tsx'
import BallCanvas from './canvas/BallCanvas'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='skillsWrapper'>
      <div className='skillsContent'>
        <motion.h5 className='skillsSubTitleTxt'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}>WHAT I'VE LEARNED SO FAR</motion.h5>
        <motion.h2 className='skillsTitle'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}>Skills.</motion.h2>
        <motion.p className='skillsMainTxt'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}>
          Throughout my programming journey, I've learned a lot and still strive to learn as much as possible, adding new tools and 
          technologies to my tech stack. Besides technologies, I'd say some of the fundamental skills that I possess and value the most 
          are my hard work ethic, communication skills, enthusiasm, and adaptability to learn and grow in any environment.
        </motion.p>
        <motion.div className='skillsTechWrapper'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, }}>
          {technologies.map((technology) => (
            <div className='technologyWrapper' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Transition(Skills)
