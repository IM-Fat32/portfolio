import React, { useEffect } from 'react';
import './HomePage.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faGit } from "@fortawesome/free-brands-svg-icons";



const HomePage = () => {

  const handleEvents = (items) => {
    window.addEventListener("scroll", () => {
      items.forEach(el => {
        console.log(`offsetTop: ${el.offsetTop}`)
        console.log(`window.scrollY : ${window.scrollY}`)
        if (window.scrollY + 700 >= el.offsetTop) {
          el.classList.add("visible");
        }
      })
    })
  };

  useEffect(() => {
    const items = document.querySelectorAll(".item__wrapper");

    handleEvents(items);
  });

  return (
    <div className="home-page__wrapper" >
      <div className="front-image__div">
        <h1 className="main-text">Dawid Neumann</h1>
        <h3>Junior Front-End Developer </h3>
      </div>
      <div className="about__wrapper">
        <h4 className="title__h4">Who am I?</h4>
        <p>
          I'm a computer science student at WSB in Poznań. I graduated Technical High School for Computer Science.
          I spend a lot of time at learning programming . Every day i develop my skills and learn new stuff.I'm determined to find my first job as a front-end developer.

        </p>
      </div>
      <div className="skills__wrapper" >
        <h4 className="title__h4">My skills?</h4>
        <div className="item__wrapper">
          <div className="icon__wrapper">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="text__wrapper">
            <h5>HTML 5</h5>
            <p>Markup language used for structuring and presenting content on the World Wide Web.</p>
          </div>
        </div>
        <div className="item__wrapper">
          <div className="icon__wrapper">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <div className="text__wrapper">
            <h5>CSS 3</h5>
            <p>Language that is used to illustrate the look, style, and format of a document written in any markup language.</p>
          </div>
        </div>
        <div className="item__wrapper">
          <div className="icon__wrapper">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="text__wrapper">
            <h5>JavaScript</h5>
            <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you.</p>
          </div>
        </div>
        <div className="item__wrapper">
          <div className="icon__wrapper">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="text__wrapper">
            <h5>React</h5>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
          </div>
        </div>
        <div className="item__wrapper">
          <div className="icon__wrapper">
            <FontAwesomeIcon icon={faGit} />
          </div>
          <div className="text__wrapper">
            <h5>Git</h5>
            <p>Free, open-source distributed version control system. It keeps track of projects and files as they change over time with the help of different contributors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;