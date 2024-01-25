import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__logo">Ayush Kathayat</h1>

        <ul className="links">
          <li className="links__item">
            <img src="/home.svg" alt="Home" />
            <Link to="/">Home</Link>
          </li>
          <li className="links__item">
            <img src="/user.svg" alt="About" />
            <Link to="/about">About</Link>
          </li>
          <li className="links__item">
            <img src="/code.svg" alt="Project" />
            <Link to="/projects">Projects</Link>
          </li>
          <li className="links__item">
            <img src="/file-text.svg" alt="Resume" />
            <Link to="/resume">Resume</Link>
          </li>
          <li className="links__item">
            <img src="/github.svg" alt="git-link" />
          </li>
        </ul>

        <div className="mode">
          <button>
            {" "}
            <img src="/sun.svg" alt="light-mode" />
          </button>

          <button>
            {" "}
            <img src="/moon.svg" alt="dark-mode" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
