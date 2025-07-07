import React from 'react';

const projectData = [
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API and React hooks.',
    codeLink: 'https://github.com/aditi8-git/weather-app', 
    demoLink: 'https://weatherapp-demo.netlify.app',
  },
  {
    title: 'Task Manager',
    description: 'A task manager built using React — track, edit and delete tasks.',
    codeLink: 'https://github.com/aditi8-git/task-manager', 
    demoLink: 'https://taskmanager-demo.netlify.app',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and responsive design.',
    codeLink: 'https://github.com/aditi8-git/react-portfolio',
    demoLink: 'https://yourname-portfolio.netlify.app', 
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn primary">
                Code
              </a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn outline">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects