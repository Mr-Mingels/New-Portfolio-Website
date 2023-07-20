import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Transition.css';

const Transition = (OgComponent:any) => {
  return () => (
    <> 
        <OgComponent />
        <motion.div 
            className='transitionMotionDiv first' 
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%' }}
            exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
        <motion.div 
            className='transitionMotionDiv second' 
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%' }}
            exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
        <motion.div 
            className='transitionMotionDiv third' 
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%' }}
            exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
    </>
  )
}

export default Transition;

