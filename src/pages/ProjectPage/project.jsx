import Nav from "../../Components/nav";

import Card from "./card";
import "./project.css";
const Project = () => {
  return (
    <>
      <Nav />

      <div className="cards-row-wrapper">
        <div className="card-row">
          <Card
            image=""
            title="SECURE CHAT: Blockchain Web Chat App"
            paragraph="A blockchain web chat app prioritizing privacy. Built with React, TypeScript, Hardhat, and Solidity, it revolutionizes secure communication. Solidity ensures robust encryption, while Hardhat streamlines development. Together, they set new standards for privacy-focused digital applications."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />

          <Card
            image=""
            title="The Bridge: Cross-Chain NFT Transfer"
            paragraph="Showcase seamless transfer of NFTs between blockchain networks. Initially on Ethereum, bridged to Polygon using FXPortal. Demonstrates cross-chain interoperability, unlocking new possibilities for DeFi, gaming, and digital collectibles."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />

          <Card
            image=""
            title="Tascopia: Full-Stack Task Management App"
            paragraph=" MERN stack app for todo lists. Features robust user authentication. Users can create, track, and prioritize tasks with subtask functionality. Simplifies task management, enhancing productivity and efficiency."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />
        </div>

        <div className="card-row">
          <Card
            image=""
            title="Calculator : Data Structures & Algorithms"
            paragraph="Powerful calculator with support for parentheses, precedence, and various mathematical operators. Efficiently evaluates complex expressions. Ideal for students, professionals, and enthusiasts seeking reliable results."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />
          <Card
            image=""
            title="To-Do App: v1.0"
            paragraph="User-friendly app for task management accessible from any browser. Offers seamless task creation, organization, and tracking. Clean design ensures optimal usability across devices."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />
          <Card
            image=""
            title="Tic Tac Toe: Single-Player Web Game"
            paragraph="Single-player web game with varying difficulty levels. Enjoy timeless gameplay against a computer opponent. Responsive design and smooth mechanics for nostalgic fun. Perfect for solo gaming sessions."
            githubLink="https://github.com/example"
            demoLink="https://example.com/demo"
            className="card"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
