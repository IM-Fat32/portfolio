import React from 'react';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolder, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <div className="nav-title">
          <FontAwesomeIcon className="nav-link" icon={faBars} />
        </div>
        <NavLink to="/" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faHome} />
          <span className="link-text">Home</span>
        </NavLink>
        <NavLink to="/" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faFolder} />
          <span className="link-text">Projects</span>
        </NavLink>
        <NavLink to="/" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faEnvelope} />
          <span className="link-text">Contact</span>
        </NavLink>
        <NavLink to="/" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faLinkedin} />
          <span className="link-text">Linkedin</span>
        </NavLink>
        <NavLink to="/" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faGithub} />
          <span className="link-text">GitHub</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;