import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm a Junior Software Developer with a passion for building tools that empower people. With a background in Theology and Software Engineering from Flatiron School, I blend analytical thinking with creative problem-solving. When I’m not coding, you’ll find me exploring philosophy, managing book collections, or helping others navigate the digital world.
      </motion.p>
    </section>
  );
};

export default About;