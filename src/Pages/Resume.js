import React from 'react'
import { Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Components/Particles/Particle";
 import resume from "../Assets/resume1.png";
 import project from "../Assets/project-his.png";
 import pdf from "../Assets/resume.pdf"


import { AiOutlineDownload } from "react-icons/ai";


function Resume() {
    return (
        <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative"}}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
            <p></p>
          </Row>
          </Container>

      <img src={resume} alt="error" style={{width:"70%" , marginLeft:"15%", marginBottom:"5%" }}/>
    </Container>
    )
}

export default Resume
