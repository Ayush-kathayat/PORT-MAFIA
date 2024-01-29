import "./home.css";
import Nav from "../../Components/nav";

import AnimatedText from "../../Components/anitext";
const Home = () => {
  const texts = ["Web Developer", "Programmer", "Designer", "Freelancer"];

  return (
    <>
      <Nav />

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
    </>
  );
};

export default Home;
