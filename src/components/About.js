import React from 'react';
const About = () => {
  return (
    <section className="About" id="About">
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate and driven Electricals student at Silicon Institute of Technology with a strong interest in web development and modern technologies.
         I enjoy building responsive and interactive web applications using tools like React, JavaScript, and Node.js. 
         With a deep curiosity for learning and a commitment to writing clean, efficient code, I aim to grow into a well-rounded full-stack developer.
          I thrive on challenges, love exploring new technologies, and am excited to contribute to impactful, real-world projects. Let’s build something amazing together!
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Clean Code</h3>
          <p>Writing maintainable, scalable code that follows best practices</p>
        </div>
        <div className="card">
          <h3>Responsive Design</h3>
          <p>Creating beautiful, mobile-first designs that work on all devices</p>
        </div>
        <div className="card">
          <h3>Performance</h3>
          <p>Optimizing applications for speed and best user experience</p>
        </div>
      </div>
    </section>
  );
};

export default About;