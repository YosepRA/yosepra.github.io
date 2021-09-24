import React from 'react';
import { Row, Col } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';
import heroStyles from '../styles/hero.module.scss';
import logo from '../assets/logo.svg';

function Hero() {
  return (
    <Row className={mainStyles.contentSection} as="section">
      <Col>
        <section className={heroStyles.hero}>
          <img src={logo} alt="StudioYosepRA" className={heroStyles.heroLogo} />

          <p className={heroStyles.heroSubtitle}>MERN Stack Web Developer</p>
        </section>
      </Col>
    </Row>
  );
}

export default Hero;
