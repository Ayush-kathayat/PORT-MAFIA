import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {

  const gitProfile = () => {
    window.location.href = "https://github.com/Ayush-kathayat";
 };
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__logo">Ayush Kathayat .</h1>

        <ul className="links">
          <li className="links__item-wrapper">
            {/* <img src="/home.svg" alt="Home" /> */}
            <div className="main-link">
              <span className="links__item">Home</span>
              <Link className="l2" to="/">
                Home
              </Link>
            </div>
          </li>
          <li className="links__item-wrapper">
            {/* <img src="/user.svg" alt="About" /> */}

            <div className="main-link">
              <span className="links__item">About</span>
              <Link className="l2" to="/about">
                About
              </Link>
            </div>
          </li>
          <li className="links__item-wrapper">
            {/* <img src="/code.svg" alt="Project" /> */}
            <div className="main-link">
              <span className="links__item">Projects</span>
              <Link className="l2" to="/projects">
                Projects
              </Link>
            </div>
          </li>
          <li className="links__item-wrapper">
            {/* <img src="/file-text.svg" alt="Resume" /> */}
            <div className="main-link">
              <span className="links__item">Resume</span>
              <Link className="l2" to="/resume">
                Resume
              </Link>
            </div>
          </li>
          <li className="git-icon" onClick={gitProfile}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
