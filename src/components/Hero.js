import React from 'react';
import profileImg from '../assests/photos.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Aditi Patnaik</h1>
          <p>An electrical student at Silicon</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/aditi8-git" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:aditipattnaik7@gmail.com"><FaEnvelope /></a>
            <a href="tel:+1234567890"><FaPhone /></a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Aditi Patnaik" />
        </div>
      </div>
    </section>
  );
};

export default Hero;