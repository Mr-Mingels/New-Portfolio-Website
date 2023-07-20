import React from 'react';
import { Suspense, lazy } from 'react';
import { Link, Routes, Route, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import appImg from './assets/appImg.jpg'

  const RedirectToHome = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);

    return null;
  }

const App = () => {

  const location = useLocation()
  return (
    <>
      <NavBar />
      <SideBar />
      <img className='appImg' src={appImg} onMouseDown={(e) => e.preventDefault()}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Hero />}/>
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='*' element={<RedirectToHome />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
