import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog-App"
              description="blogging app In Mern stack discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries"
              ghLink="https://github.com/codecraft26/Blog-App.git"
              demoLink="https://github.com/codecraft26/Blog-App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="inquire"
              description="Inquire is a question and answer application for professional and enthusiast programmers. user can post in image formate with description. Inquire is a code sharing and dicovery platform aimed at improving developer prductivity."
              ghLink="https://github.com/codecraft26/Inquire.git"
              demoLink="https://github.com/codecraft26/Inquire/releases/download/v1.0.0-alpha/inquire.apk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="IMdb Movie-Search"
              description="here is web app for learning how to pass data from one component from one to another component. I make this project to learn api fetching and passing data from one component to another component."
              ghLink="https://github.com/codecraft26/Imbd-movie.git"
              demoLink="https://imbd-movie.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Marvel universe"
              description="Marvel universe is a  app for learning how to pass data from one component from one to another component. I make this project to learn api fetching and passing data from one component to another component."
              ghLink="https://github.com/codecraft26/Marvel-Universe.git"
              demoLink="https://github.com/codecraft26/Marvel-Universe/releases/download/version1/Marvel_universe.apk"
            />
          </Col>

      

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
