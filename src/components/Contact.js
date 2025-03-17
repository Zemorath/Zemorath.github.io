import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="contact-links">
        <motion.a
          href="https://github.com/Zemorath"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub size={40} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/trentward100/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={40} />
        </motion.a>
        <motion.a
          href="https://dev.to/zemorath"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaDev size={40} />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;