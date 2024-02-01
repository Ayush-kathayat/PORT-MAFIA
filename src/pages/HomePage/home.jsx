import "./home.css";
import Nav from "../../Components/nav";

import AnimatedText from "../../Components/anitext";
const Home = () => {
  const texts = ["Web Developer", "Programmer", "Designer", "Freelancer"];

  return (
    <>
      {/* navbar */}

      <Nav />

      {/* hero section */}
      <div className="hero">
        <div className="hero-left">
          <h1>Hi There!</h1>
          <p>
            I AM <span className="name">AYUSH KATHAYAT.</span>
          </p>

          <AnimatedText texts={texts} />
        </div>

        <div className="hero-right">
          <img src="/hero-img.svg" alt="hero" />
        </div>
      </div>

      {/* about me section */}
      <div className="about-me">
        <h1>
          LET ME <span>INTRODUCE</span> MYSELF
        </h1>
        <p className="para">
          I fell for programming, and I have definitely picked up a thing or two
          along the way. 🚀
        </p>

        <p className="para">
          Proficient in the triumvirate of coding:{" "}
          <span>C++,JavaScript, and Python,</span>
          crafting digital symphonies with each line. 🎵💻
        </p>

        <p className="para">
          Fascinated by forging <span>new web technologies and products</span>,
          with a keen eye on <span>blockchain innovation.</span> 🌐⛓️
        </p>
        <p className="para">
          Diving into <span>product development</span> with fervor, leveraging{" "}
          <span>Node.js , Next.js</span> and cutting-edge{" "}
          <span>JavaScript libraries</span> like <span>React.js</span> and{" "}
          <span>Next.js.</span> 🚀🔧
        </p>
      </div>

      {/* Find me section */}
      <div className="find-me">
        <h1>WHERE TO FIND ME</h1>
        <p>Feel free to connect</p>
        <div className="find-me-links">
          <a href="#section1">
            <img src="/github.svg" alt="github" />
          </a>
          <a href="#section2">
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
          <a href="#section3">
            <img src="/instagram.svg" alt="instagram" />
          </a>
          <a href="#section4">
            <img src="/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>

      {/* footer section */}
      <footer className="footer">
        <p>Designed and Developed by Ayush Kathayat</p>
        <p>Copyright © 2024 AK.</p>

        <div className="footer-links">
          <a href="#section1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#section2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#section3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#section4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
