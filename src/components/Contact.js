import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="https://github.com/Zemorath" target="_blank" rel="noopener noreferrer">
          <img src="/github-logo.png" alt="GitHub" className="contact-logo" />
        </a>
        <a href="https://www.linkedin.com/in/trentward100/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-logo.png" alt="LinkedIn" className="contact-logo" />
        </a>
        <a href="https://dev.to/zemorath" target="_blank" rel="noopener noreferrer">
          <img src="/devto-logo.png" alt="Dev.to" className="contact-logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

