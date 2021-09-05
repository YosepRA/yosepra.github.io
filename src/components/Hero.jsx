import React from 'react';
import { Row, Col } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';
import heroStyles from '../styles/hero.module.scss';

function Hero() {
  return (
    <Row className={mainStyles.contentSection}>
      <Col>
        <section className={heroStyles.hero}>
          <div className={heroStyles.heroLogo}>
            <h1>YosepRA</h1>
          </div>
          <p className={heroStyles.heroSubtitle}>MERN Stack Web Developer</p>
        </section>
      </Col>
    </Row>
  );
}

export default Hero;
