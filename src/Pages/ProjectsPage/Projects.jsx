import React, { useEffect } from 'react';
import './Projects.css';

const ProjetsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="projects__wrapper">
      <div>
        <h5>Projects</h5>
      </div>
      <div className="items__container">
        <ul>
          <li>
            <div className="item">
              <p>React Shop v.1</p>
              <a href="https://im-fat32.github.io/react-shop-deploy" target="blank_">
                <button className="button">Check</button>
              </a>
            </div>
          </li>
          <li>
            <div className="item">
              <p>Simple game</p>
              <a href="/#">
                <button className="button">Check</button>
              </a>
            </div>
          </li>
        </ul>

      </div>
    </div >
  );
}

export default ProjetsPage;