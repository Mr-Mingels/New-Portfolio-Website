import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
