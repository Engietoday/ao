import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

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
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Engietoday/ao/main/src/Assets/surus.jpg"
              title="GM Defense SURUS"
              description="The GM SURUS platform is the next generation utility vehicle designed from the ground up with military applications in mind. My role in this system was to develop a way for the vehicle to autonomously navigate in off-road enviroments through use of SLAM. The vehicle platform was also made safer by use of an onboard safety monitoring software."              link="https://github.com/sijeeshmiziha/flipkart"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Engietoday/ao/main/src/Assets/origin.jpg"
              title="GM-Cruise"
              description="The A100 Origin is the flagship vehicle both both GM and Cruise Automation in for self-driving vehicles. I developed software for the embedded controllers in this platform and have worked with suppliers to bring this project closer to production ready."
              link="https://github.com/sijeeshmiziha/olx"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Netflix-clone"
              description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."              link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
