import Transition from './Transition'
import '../styles/Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faAngleRight, faAngleLeft, faA } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { projects } from '../constants/index';

const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0)
  const [carouselProjectsSliderLength, setCarouselProjectsSliderLength] = useState(3)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 1032) {
      setCurrIndex(0)
      setCarouselProjectsSliderLength(5)
    } else {
      setCurrIndex(0)
      setCarouselProjectsSliderLength(3)
    }
  }, [windowWidth]);

  const handlePrevSlide = () => {
    setCurrIndex((currIndex) => (currIndex === 0 ? carouselProjectsSliderLength - 1 : currIndex - 1))
  }

  const handleNextSlide = () => {
    setCurrIndex((currIndex) => (currIndex === carouselProjectsSliderLength - 1 ? 0 : currIndex + 1))
  }

  return (
    <div className='projectsWrapper'>
      <div className='projectsContent'>
        <motion.h5 className='projectsMyWorkTxt'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}>MY WORK</motion.h5>
        <motion.h2 className='projectsTitle'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>Projects</motion.h2>
        <motion.p className='projectsMainTxt'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}>Discover a curated collection of my projects, each embodying my commitment to project-based
          learning and efficient problem-solving. You'll find a description for each, along with access to both the
          live demos and their respective code repositories. These projects serve as a testament to my ability to employ various
          technologies and tackle complex challenges with proficiency.
        </motion.p>
        <div className='carouselWrapper'>
          <div className='carouselContent' style={{ transform: `translateX(-${currIndex * 100}%)` }}>
            {projects.map((project, index) => (
              <div className='projectCardWrapper'>
                <div className='projectCard' key={index}>
                  <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                    <img className='projectImg' src={project.projectImg} alt='project img' onMouseDown={(e) => e.preventDefault()} />
                    <div className='projectImgSelectorsWrapper'>
                      <a href={`${project.projectLiveLink}`} target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                        <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                      <a href={`${project.projectGitHubLink}`} target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                        <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                    </div>
                  </div>
                  <h5 className='projectTitle'>{project.projectTitle}</h5>
                  <p className='projectTxt'>{project.projectDesc}</p>
                  <div className='projectTagsWrapper'>
                    <span className='firstTag'>{project.projectFirstTag}</span> <span className='secondTag'>{project.projectSecondTag}</span> {project.projectThirdTag && (<span className='thirdTag'>{project.projectThirdTag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>  
          <div className='carouselArrowWrapper left' onClick={() => handlePrevSlide()}>
              <FontAwesomeIcon icon={faAngleLeft} className='carouselArrow'/>
          </div>
          <div className='carouselArrowWrapper right' onClick={() => handleNextSlide()}>
              <FontAwesomeIcon icon={faAngleRight} className='carouselArrow'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transition(Projects)