import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  // const gitProfile = () => {
  //   window.location.href = "https://github.com/Ayush-kathayat";
  // };
  return (
    <>
      <nav className={showMobMenu ? "active navbar" : "navbar"}>
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
          {/* <li className="git-icon" onClick={gitProfile}>
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
          </li> */}
        </ul>

        <div
          className="mobile-navbar-btn"
          onClick={() => setShowMobMenu(!showMobMenu)}
        >
          <svg
            className="open-menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="26px"
            height="26px"
          >
            <path
              d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
              fill="#ffffff"
            />
          </svg>

          <svg
            className="close-menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="28px"
            height="28px"
          >
            <path
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Nav;
