import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__logo">Ayush Kathayat</h1>

        <ul className="links">

          
          <li className="links__item-wrapper">
            {/* <img src="/home.svg" alt="Home" /> */}
            <div className="main-link">
            <Link className="links__item" to="/">
              Home
            </Link>
            <span className="l2">Home</span>
            </div>

          </li>
          <li className="links__item-wrapper">
            {/* <img src="/user.svg" alt="About" /> */}

            <div className="main-link">
            <Link className="links__item" to="/about">
              About
            </Link>
            <span className="l2">About</span>
            </div>
          </li>
          <li className="links__item-wrapper">
            {/* <img src="/code.svg" alt="Project" /> */}
            <div className="main-link">
            <Link className="links__item" to="/projects">
              Projects
            </Link>
            <span className="l2">Projects</span>
            </div>
          </li>
          <li className="links__item-wrapper">
            {/* <img src="/file-text.svg" alt="Resume" /> */}
            <div className="main-link">
            <Link className="links__item" to="/resume">
              Resume
            </Link>
            <span className="l2">Resume</span>
            </div>
          </li>
          {/* <li className="links__item">
            <img src="/github.svg" alt="git-link" />
          </li> */}
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
