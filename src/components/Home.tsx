import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css'
import Transition from './Transition';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div className='homeWrapper'>
            <motion.div className='homeContent'>
                <motion.div 
                    className='homeContentInfoWrapper'
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <motion.h1 className='homeDevName'>
                        Pierre Mingels
                    </motion.h1>
                    <motion.div 
                        className='homeTypeAnimationWrapper'
                        initial={{ x: -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    >
                        <TypeAnimation
                            sequence={[
                            "I'm into Engineering",
                            1000,
                            "I'm into Technology",
                            1000,
                            "I'm into Gaming",
                            1000,
                            "I'm into Clean UI",
                            1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.a 
                        className='homeBtn' href='https://drive.google.com/file/d/11yHQeYL8cdwzXTmLHndwpnCvV7cO0-c_/view?usp=sharing' 
                        target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                        initial={{ x: -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    >
                        Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Transition(Home)
