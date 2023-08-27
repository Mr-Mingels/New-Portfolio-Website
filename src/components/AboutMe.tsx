import React from 'react'
import '../styles/AboutMe.css'
import Transition from './Transition'
import frontEndIcon from '../assets/frontEndIcon.png'
import backEndIcon from '../assets/backEndIcon.png'
import webDevIcon from '../assets/webDevIcon.png'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import appImg from '../assets/appImg.jpg'

const AboutMe = () => {
  return (
    <div className='aboutMeWrapper'>
        <img className='appImg aboutme' src={appImg} onMouseDown={(e) => e.preventDefault()}/>
        <div className='aboutMeCotent'>
            <motion.h5 className='aboutMeSecTitle'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>ABOUT ME</motion.h5>
            <motion.h2 className='aboutMeOverViewTxt'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>Overview.</motion.h2>
            <motion.p className='aboutMeTxt' 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            >Hello! I'm Pierre Mingels, a skilled full-stack software developer from San Diego, California. 
            I have expertise in JavaScript, React, Node.js, and other technologies. My passion for continuous learning 
            drives me to stay updated with the latest trends. Apart from coding, I enjoy reading and spending time with friends. 
            If you're an ambitious, like-minded individual, feel free to contact me!
            </motion.p>
            <div className='aboutMeCardsWrapper'>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <motion.div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}>
                        <img className='cardImg' src={frontEndIcon}/>
                        <h5 className='cardTitle'>Front End Developer</h5>
                    </motion.div>
                </Tilt>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <motion.div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}>
                        <img className='cardImg' src={webDevIcon} />
                        <h5 className='cardTitle'>Web Developer</h5>
                    </motion.div>
                </Tilt>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <motion.div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}>
                        <img className='cardImg' src={backEndIcon} />
                        <h5 className='cardTitle'>Back End Developer</h5>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Transition(AboutMe)
