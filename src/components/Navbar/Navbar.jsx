import React from 'react';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolder, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import './Navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <div className="nav-title">
          <FontAwesomeIcon className="nav-link" icon={faArrowRight} />
        </div>
        <NavLink to="/portfolio" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faHome} />
          <span className="link-text">Home</span>
        </NavLink>
        <NavLink to="/portfolio/projects" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faFolder} />
          <span className="link-text">Projects</span>
        </NavLink>
        <a target="blank_" href="https://linkedin.com/in/dawid-neumann-49a29a203" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faLinkedin} />
          <span className="link-text">Linkedin</span>

        </a>
        <a target="blank_" href="https://github.com/IM-Fat32" className="nav-item">
          <FontAwesomeIcon className="nav-link" icon={faGithub} />
          <span className="link-text">GitHub</span>
        </a>
      </ul>
    </nav >
  );
}

export default Navbar;