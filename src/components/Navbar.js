import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Trent Ward</Link>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

