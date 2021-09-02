import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <Row>
      <Col>
        <section className="hero">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <p>MERN Stack Web Developer</p>
        </section>
      </Col>
    </Row>
  );
}

export default Hero;
