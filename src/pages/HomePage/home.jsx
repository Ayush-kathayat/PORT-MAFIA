import "./home.css";

import Nav from "../../Components/nav";
const Home = () => {
  return (
    <>
      <Nav />

      <div className="hero">
        <div className="hero-left">
          <h1>Hi There!</h1>
          <p>I AM <span className="name">AYUSH KATHAYAT.</span></p>
        </div>
        <div className="hero-right">
          <img src="/hero-img.svg" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Home;
