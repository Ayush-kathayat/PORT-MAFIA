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

      <div className="about-me">
        <h1>LET ME <span>INTRODUCE</span> MYSELF</h1>
       <p className="para">
          I fell for programming, and I have definitely picked up a thing or two
          along the way. 🚀
        </p>

        <p className="para">
          Proficient in the triumvirate of coding: <span>C++,JavaScript, and Python,</span>
          crafting digital symphonies with each line. 🎵💻
        </p>

        <p className="para">
          Fascinated by forging <span>new web technologies and products</span>, with a keen
          eye on <span>blockchain innovation.</span> 🌐⛓️
        </p>
        <p className="para">
          Diving into <span>product development</span> with fervor, leveraging <span>Node.js , Next.js</span> and
          cutting-edge <span>JavaScript libraries</span> like <span>React.js</span> and <span>Next.js.</span> 🚀🔧
        </p>
       
      </div>
    </>
  );
};

export default Home;
