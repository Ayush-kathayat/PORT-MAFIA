import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <h1>Ayush Kathayat</h1>
        <ul>
          <ul>
            <li>
            <img src="/home.svg" alt="Home" />
              <Link to="/home">Home</Link>
            </li>
            <li>
              <img src="/user.svg" alt="About" />
              <Link to="/about">About</Link>
            </li>
            <li>
              <img src="/code.svg" alt="Project" />
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <img src="/file-text.svg" alt="Resume"/>
              <Link to="/resume">Resume</Link>
            </li>

            <li>
              <img src="/github.svg" alt="git-link"/>
            </li>
          </ul>

        </ul>

      </nav>
    </>
  );
};

export default Nav;
