import Nav from "../../Components/nav";

import Card from "./card";
import "./project.css";
const Project = () => {
  return (
    <>
      <Nav />

      <div className="card-row">
        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />

        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />

        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />
      </div>

      <div className="card-row">
        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />
        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />
        <Card
          image="path/to/image.png"
          title="Example Card"
          paragraph="This is an example of a reusable card component."
          githubLink="https://github.com/example"
          demoLink="https://example.com/demo"
        />
      </div>
    </>
  );
};

export default Project;
