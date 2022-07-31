import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  
  AiOutlineMail,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Address() {
  return (
    <Container>
          <Row>
              <Col md={12} className="address">
              
              
              
              </Col>
     
            <Col md={12} className="contact-image-container">
              <img className="contact-image" src={call} alt="" />{" "}
              
            </Col>
           <Row> 
           <Col md={6} className="contact-address">

           <h4 >Phone Number</h4> 
              
              <p>  <AiOutlineWhatsApp/> +1 (248) 870-7318 </p>
              </Col>
              <Col md={6} className="contact-address">
              <h4 >Email Address</h4> 
              <p>
                
                <AiOutlineMail/> aoyu.engineering@gmail.com
              </p>
              </Col>

        </Row>

            <Col md={12} className="home-about-social">
              <h1>Contact Me</h1>
              <span>
                I am available on almost every social media. You can message me,
                I will reply within 24 hours. I can help you with web and embedded systems development.
              </span>
              <br/>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Engietoday"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ao-yu"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineWhatsApp />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
           
     
          </Row>
        </Container>
   
  );
}

export default Address;
