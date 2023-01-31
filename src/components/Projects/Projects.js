import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Quizz Managment System"
              description="It was quizz managment system built using Java which used libraries like Java GUI and etc.."
              ghLink="https://github.com/jennymeshaiah09/Quizz-Managment-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Some Projects in my Git HUB repository"
              description="It was quizz managment system built using Java which used libraries like Java GUI and etc.."
              ghLink="https://github.com/jennymeshaiah09/Projects"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hospital Managment System"
              description="It was hospital managment system built using Java which used libraries like Java GUI and etc.."
              ghLink="https://github.com/jennymeshaiah09/Hopital-Managment-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
