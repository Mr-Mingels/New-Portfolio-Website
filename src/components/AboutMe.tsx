import React from 'react'
import '../styles/AboutMe.css'
import Transition from './Transition'
import frontEndIcon from '../assets/frontEndIcon.png'
import backEndIcon from '../assets/backEndIcon.png'
import webDevIcon from '../assets/webDevIcon.png'
import { Tilt } from 'react-tilt'

const AboutMe = () => {
  return (
    <div className='aboutMeWrapper'>
        <div className='aboutMeCotent'>
            <h5 className='aboutMeSecTitle'>ABOUT ME</h5>
            <h2 className='aboutMeOverViewTxt'>Overview.</h2>
            <p className='aboutMeTxt'>Hello! I'm Pierre Mingels, a skilled full-stack software developer from San Diego, California. 
            I have expertise in JavaScript, React, Node.js, and other technologies. My passion for continuous learning 
            drives me to stay updated with the latest trends. Apart from coding, I enjoy reading and spending time with friends. 
            If you're an ambitious, like-minded individual, feel free to contact me!
            </p>
            <div className='aboutMeCardsWrapper'>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}>
                        <img className='cardImg' src={frontEndIcon}/>
                        <h5 className='cardTitle'>Front End Developer</h5>
                    </div>
                </Tilt>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}>
                        <img className='cardImg' src={webDevIcon} />
                        <h5 className='cardTitle'>Web Developer</h5>
                    </div>
                </Tilt>
                <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
                    <div className='aboutMeCard' onMouseDown={(e) => e.preventDefault()}>
                        <img className='cardImg' src={backEndIcon} />
                        <h5 className='cardTitle'>Back End Developer</h5>
                    </div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Transition(AboutMe)
