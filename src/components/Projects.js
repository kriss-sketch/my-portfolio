import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Web-Based Management System',
      description: 'A CRUD-based web application that allows users to create, view, update, and delete records through a clean and intuitive interface.',
      type: 'What I Know',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      highlights: 'Strengthened my core web development skills by building reliable CRUD functionality and structured database interactions.',
      link: 'https://github.com/yourusername/management-system'
    },
    {
      id: 2,
      title: 'Network & Web Infrastructure Project',
      description: 'Designed and simulated a network infrastructure integrating wired and wireless devices, DNS, and web servers to ensure reliable connectivity and service delivery.',
      type: 'What I Learned',
      technologies: ['Packet Tracer', 'Networking Concepts', 'Web Servers'],
      highlights: 'Designed and simulated reliable network and web infrastructure, strengthening my understanding of how applications are delivered and supported in real environments.',
      link: 'https://github.com/yourusername/network-infrastructure'
    },
    {
      id: 3,
      title: 'Modern Portfolio Web App',
      description: 'A responsive, modern portfolio built using React/Next.js, focused on performance, accessibility, and user experience, and deployed using a CI/CD workflow.',
      type: 'What I\'m Aspiring To',
      technologies: ['Next.js', 'React', 'Github', 'Vercel'],
      highlights: 'Built a modern, user-focused web application using React and Next.js, applying performance optimization, accessibility, and CI/CD deployment practices.',
      link: 'https://github.com/yourusername/portfolio'
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
