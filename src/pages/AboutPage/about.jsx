import Nav from "../../Components/nav";
import Footer from "../../Components/footer";

import "./about.css";

const About = () => {
  return (
    <>
      <Nav />

      <div className="about-me">
        <div className="about-me-left">
          <h1>
            Know who <span>I AM</span>
          </h1>
          <p>
            Hey everyone! I am <span>Ayush Kathayat</span> from{" "}
            <span>Haldwani, India</span>. Currently pursuing a BE in CSE at
            Chandigarh University. Eager to dive into the world of software
            development and explore its endless possibilities.{" "}
          </p>
        </div>
        <div className="about-me-right">
          <img src="/about.svg" alt="about" />
        </div>
      </div>

      {/* <Footer /> */}

      
    </>
  );
};

export default About;
