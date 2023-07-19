import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import StarsCanvas from './canvas/StarsCanvas'
import '../styles/Hero.css'
import heroImg from '../assets/img.jpg'


const Hero = () => {
    return (
        <div className='heroWrapper'>
            <img className='heroImg' src={heroImg} onMouseDown={(e) => e.preventDefault()}/>
            <div className='heroContent'>
                <div className='heroContentInfoWrapper'>
                    <h1 className='heroDevName'>Pierre Mingels</h1>
                    <div className='heroTypeAnimationWrapper'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero