import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Bookseller',
    company: 'Half Price Books, Austin, TX',
    duration: 'Aug 2022 - Present',
    details: 'Analyze sales data to manage stock, engage with customers, and deliver projects on time.'
  },
  {
    role: 'Retention Specialist',
    company: 'Spectrum, Austin, TX',
    duration: 'Apr 2021 - Feb 2022',
    details: 'Identified customer issues and tailored solutions to retain them.'
  },
  {
    role: 'Licensed Sales Representative',
    company: 'Allstate, Denver, CO',
    duration: 'Jul 2020 - Jul 2021',
    details: 'Tracked clients and communicated technical info to non-technical audiences.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3>{exp.role}</h3>
            <p>{exp.company} | {exp.duration}</p>
            <p>{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;