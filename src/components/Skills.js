import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  'Python', 'JavaScript', 'React', 'Flask', 'SQL', 'Redux',
  'Problem-Solving', 'Leadership', 'Data Analysis', 'Project Management'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;