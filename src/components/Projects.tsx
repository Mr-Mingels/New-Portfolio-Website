import Transition from './Transition'
import '../styles/Projects.css'
import finTrackImg from '../assets/finTrackDesktopScreenShot.png'
import puckMasterImg from '../assets/puckMasterScreenShot.png'
import fotoFolioImg from '../assets/fotoFolioScreenShot.png'
import chatterSphereImg from '../assets/chatterSphereDesktopScreenShot.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Projects = () => {

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
            transition={{ duration: 1, delay: 1 }}>Projects.</motion.h2>
            <motion.p className='projectsMainTxt'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}>Discover a curated collection of my projects, each embodying my commitment to project-based 
                learning and efficient problem-solving. You'll find a description for each, along with access to both the 
                live demos and their respective code repositories. These projects serve as a testament to my ability to employ various 
                technologies and tackle complex challenges with proficiency.
            </motion.p>
            {windowWidth <= 800 ? (
              <Carousel className='projectsCarouselWrapper' showStatus={false} infiniteLoop={true} >
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={fotoFolioImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://foto-folio.vercel.app/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Foto Folio</h5>
                      <p className='projectTxt'>FotoFolio is a powerful and visually engaging photo gallery application, 
                      designed and developed as a simple and user friendly application.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#node.js</span>
                      </div>
                    </div>
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={puckMasterImg}/>
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://puck-master.vercel.app/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Puck-Master</h5>
                      <p className='projectTxt'>Puck-Master is a React-based virtual air hockey game that offers interactive gameplay 
                      against an AI opponent, all within your browser!</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#ai</span>
                      </div>
                    </div>
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={chatterSphereImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://chatter-sphere.onrender.com/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Chatter Sphere</h5>
                      <p className='projectTxt'>Chatter Sphere is a feature-rich full-stack application that facilitates real-time global 
                      communication, fostering easier and more engaging connections.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#mongodb</span> <span className='thirdTag'>#node.js</span>
                      </div>
                    </div>
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={finTrackImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://fin-track.onrender.com/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Fin Track</h5>
                      <p className='projectTxt'>Fin Track is an application for easy personal finance management, offering 
                      dynamic budget planning and expense tracking to simplify your financial life.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#postgresql</span> <span className='thirdTag'>#node.js</span>
                      </div>
                    </div>
              </Carousel>
            ) : (
              <Carousel className='projectsCarouselWrapper' showStatus={false} infiniteLoop={true} >
                <div className="projectCarouselSlide">
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={fotoFolioImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://foto-folio.vercel.app/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Foto Folio</h5>
                      <p className='projectTxt'>FotoFolio is a powerful and visually engaging photo gallery application, 
                      designed and developed as a simple and user friendly application.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#node.js</span>
                      </div>
                    </div>
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={puckMasterImg}/>
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://puck-master.vercel.app/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Puck-Master</h5>
                      <p className='projectTxt'>Puck-Master is a React-based virtual air hockey game that offers interactive gameplay 
                      against an AI opponent, all within your browser!</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#ai</span>
                      </div>
                    </div>
                </div>
                <div className="projectCarouselSlide">
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={chatterSphereImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://chatter-sphere.onrender.com/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Chatter Sphere</h5>
                      <p className='projectTxt'>Chatter Sphere is a feature-rich full-stack application that facilitates real-time global 
                      communication, fostering easier and more engaging connections.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#mongodb</span> <span className='thirdTag'>#node.js</span>
                      </div>
                    </div>
                    <div className='projectCard'>
                      <div className='projectImgWrapper' onMouseDown={(e) => e.preventDefault()}>
                          <img className='projectImg' src={finTrackImg} />
                          <div className='projectImgSelectorsWrapper'>
                            <a href="https://fin-track.onrender.com/" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faEye} /></a>
                            <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" className='projectIconLink'>
                              <FontAwesomeIcon className='projectIcon' icon={faGithub} /></a>
                          </div>
                      </div>
                      <h5 className='projectTitle'>Fin Track</h5>
                      <p className='projectTxt'>Fin Track is an application for easy personal finance management, offering 
                      dynamic budget planning and expense tracking to simplify your financial life.</p>
                      <div className='projectTagsWrapper'>
                        <span className='firstTag'>#react</span> <span className='secondTag'>#postgresql</span> <span className='thirdTag'>#node.js</span>
                      </div>
                    </div>
                </div>
              </Carousel>
            )}
        </div>
    </div>
  )
}

export default Transition(Projects)
