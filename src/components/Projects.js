import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import './Projects.css';

const projects = [
  {
    title: 'Travium',
    description: 'A platform to manage subscriptions and services, designed for elderly users.',
    tech: 'React | JavaScript | Python | Flask | SQLAlchemy',
    link: 'https://github.com/Zemorath/Travium'
  },
  {
    title: 'Library Database',
    description: 'Open-source CLI for managing books and users.',
    tech: 'Python | SQL',
    link: 'https://github.com/Zemorath/library-database'
  },
  {
    title: 'Zeer',
    description: 'A free website to track your book collection.',
    tech: 'JavaScript | CSS | HTML',
    link: 'https://github.com/Zemorath/personal-library'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;