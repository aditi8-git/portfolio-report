import React from 'react';
import './App.css';
import photo from './assests/photos.jpg';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Top-Right Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Aditi Patnaik</h1>
            <p>An electrical student at Silicon</p>
          </div>
          <div className="hero-image">
            <img src={photo} alt="Aditi" />
          </div>
        </div>
      </section>

      {/* Content Components Only (No Duplicate Headings) */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;