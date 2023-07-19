import React from 'react'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutMeWrapper'>
        <div className='aboutMeCotent'>
            <h5 className='aboutMeSecTitle'>ABOUT ME</h5>
            <h2 className='aboutMeOverViewTxt'>Overview.</h2>
            <p className='aboutMeTxt'>Hello. I'm Pierre Mingels, a skilled full-stack software developer from San Diego, California. 
                I have experience in popular languages such as TypeScript and JavaScript, as well as experience in 
                frameworks like React, Express.js, and other types of technology. I'm a quick learner and 
                believe that continued learning is paramount in this fast-evolving field, which is why I dedicate 
                a good portion of my time to keeping up to date with the latest trends and technology. Besides coding, 
                I enjoy reading and hanging out with friends. I would love to work with like-minded, ambitious people, 
                so if that's you, you can contact me below!
            </p>
            <button className='aboutMeResumeBtn'>Resume</button>
        </div>
    </div>
  )
}

export default AboutMe
