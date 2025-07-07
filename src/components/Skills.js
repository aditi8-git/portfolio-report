import React from 'react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 65 },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level + '%' }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;