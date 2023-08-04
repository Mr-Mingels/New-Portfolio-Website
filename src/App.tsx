import React, { useState } from 'react';
import { Suspense, lazy } from 'react';
import { Link, Routes, Route, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import appImg from './assets/appImg.jpg'

  const RedirectToHome = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);

    return null;
  }

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  const location = useLocation()
  return (
    <div className='App'>
      {isLoading &&(
        <div className='loaderWrapper'><span className="loader"></span></div>
      )}
      <NavBar />
      <SideBar />
      <img className='appImg' src={appImg} onMouseDown={(e) => e.preventDefault()} onLoad={() => setIsLoading(false)}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />}/>
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<RedirectToHome />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
