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
              title="GM Defense - SURUS"
              description="The GM SURUS platform is the next generation utility vehicle designed from the ground up with military applications in mind. My role in this system was to develop autonomous navigation capabilities in off-road enviroments through use of Graph SLAM. The vehicle platform was also made safer by use of my onboard safety monitoring software."              link="https://news.gm.com/newsroom.detail.html/Pages/news/us/en/2017/oct/1006-fuel-cell-platform.html"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Engietoday/ao/main/src/Assets/origin.jpg"
              title="GM - Cruise"
              description="The Origin is the flagship vehicle for GM and Cruise Automation in self-driving vehicles. I have developed software for the embedded controllers in this platform and have worked with suppliers to bring this project closer to production ready."
              link="https://techcrunch.com/2021/10/07/cruise-plans-to-have-tens-of-thousands-of-origin-avs-on-roads-in-coming-years/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAL5Adpx6Iu8Or_T2Ob12sQboeyxfM__p4MWYtqDbGu5jmpI9YdZQzAlH2MiM5XOpOmrYuII0l7zkM-Cm05590nxWUdWA11xLyjc6Sn1SWFKAGPFQwZpI_IWo_Kk1l5ntFtI56PICm0Tl1bWZiE5sd_4IBoJQaDBOJ3uTUk0Fkq2y"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://assets.newatlas.com/dims4/default/5564321/2147483647/strip/true/crop/1280x853+0+0/resize/840x560!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F79%2Fc2%2F7037f0204f8b953292f2f8158a36%2F2021-cadillac-escalade-004.jpg"
              title="GM - Ultra Cruise"
              description="Being a software engineer in the ultra cruise program opened my eyes to the complex nature of commercial autonomous technology. My responsibilities include algorithm developement, root-cause analysis, test automation, basic software debelopement, and software architecture."              link="https://newatlas.com/automotive/gm-ultra-cruise/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
