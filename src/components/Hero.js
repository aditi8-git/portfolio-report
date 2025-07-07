import React from 'react';
import profileImg from '../assests/photos.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="profile-image">
          <img src={profileImg} alt="Aditi Patnaik" />
        </div>
        <div className="intro-text">
          <h1>Hi, I'm Aditi Patnaik</h1>
          <p>An electrical student at Silicon</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;