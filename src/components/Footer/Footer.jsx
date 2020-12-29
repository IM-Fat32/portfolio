import React from 'react';
import './Footer.css';

import Contact from '../Contact/Contact.jsx';
const Footer = () => {
  return (
    <>
      <div className="footer__wrapper">
        <Contact />
      </div>
      <div className="rights">
        <p>Dawid Neumann | All right's reserved</p>
      </div>
      <div className="fill"></div>
    </>
  );
}

export default Footer;