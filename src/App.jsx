import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


//! imports

import Home from "./pages/HomePage/home.jsx";
import About from "./pages/AboutPage/about.jsx";
import Project from "./pages/ProjectPage/project.jsx";
import Resume from "./pages/ResumePage/resume.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
