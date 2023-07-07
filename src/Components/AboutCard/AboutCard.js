import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Ao Yu </span>
            and I' am a seasoned Software Engineer from <span className="purple"> Michigan, USA.</span>
            <br />
            <br />I have been a Software Engineer since 2017 and loved every moment of it.<br /> <br />
           <br />
            ⚡ I have lead many high profile software development for innovative projects.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Autonomous Robotics, Embedded Systems, and Full Stack Development .
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;