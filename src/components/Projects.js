import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Network Topology Simulation (Cisco Packet Tracer)',
      description: 'A full-stack e-commerce application built with React and Node.js featuring product catalog, shopping cart, and payment integration.',
      type: 'What I Know',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      highlights: 'Demonstrates core full-stack competency with database integration and payment processing',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and task prioritization features.',
      type: 'What I Learned',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      highlights: 'Built real-time features and authentication—expanded my backend knowledge',
      link: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'An advanced analytics platform integrating machine learning predictions with interactive data visualization.',
      type: 'What I\'m Aspiring To',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      highlights: 'Shows direction towards AI/ML integration and advanced data visualization',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h2>The Big Three Projects</h2>
      <p className="projects-intro">
        These three projects showcase my growth as a developer—from proven expertise to recent learnings to future aspirations.
      </p>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-type-badge">{project.type}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="highlights">{project.highlights}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
