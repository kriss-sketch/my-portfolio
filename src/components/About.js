import React from 'react';
import './About.css';

function About() {
  const currentlyLearning = [
    { skill: 'TypeScript', why: 'Better type safety and scalability', progress: '60%' },
    { skill: 'Next.js', why: 'Server-side rendering and full-stack framework', progress: '50%' },
    { skill: 'GraphQL', why: 'Efficient data fetching for complex applications', progress: '40%' }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with expertise in React.js, JavaScript, and modern web technologies. 
          I love building responsive, user-friendly applications that solve real-world problems.
        </p>
        <p>
          With a focus on clean code and best practices, I strive to create scalable solutions that provide 
          excellent user experiences. When I'm not coding, you can find me exploring new technologies or contributing 
          to open-source projects.
        </p>
        
        <div className="skills">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Tools</h4>
              <ul>
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>npm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="growth-section">
          <h3>Currently Learning</h3>
          <p className="growth-intro">I'm committed to continuous growth. Here's what I'm actively learning right now:</p>
          <div className="learning-grid">
            {currentlyLearning.map((item, index) => (
              <div key={index} className="learning-card">
                <h4>{item.skill}</h4>
                <p className="learning-why">{item.why}</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: item.progress }}></div>
                </div>
                <span className="progress-text">{item.progress}</span>
              </div>
            ))}
          </div>
          <p className="growth-note">
            💡 <strong>Growth Mindset:</strong> I believe the best developers never stop learning. 
            Each new technology expands my capabilities and helps me build better solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
