import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to work together or just say hello, feel free to reach out!</p>
      <div className="contact-info">

        <p><strong>Email:</strong> aditipattnaik7@gmail.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> BBSR, India</p>
      </div>
      <div className="contact-icons">
        <a href="https://github.com/aditi8-git/react-portfolio" target="_blank" rel="noopener noreferrer">
        
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:aditipattnaik7@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;