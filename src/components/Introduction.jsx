import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cn from 'classnames';

import mainStyles from '../styles/main.module.scss';
import introductionStyles from '../styles/introduction.module.scss';

const Introduction = function IntroductionComponent() {
  return (
    <Container>
      <Row
        className={cn(mainStyles.contentSection, introductionStyles.intro)}
        as="section"
      >
        <Col md={10} lg={8} className={introductionStyles.introCol}>
          <p>
            My name is Yosep Ryan Agusta, a web developer who specializes on
            MERN stack. But most importantly, <b>I love solving problems.</b>
          </p>

          <p>
            I will build a web-based application that will be a solution to your
            problem. Through my expertise in using a modern technology stack, I
            will create an application that works well and fun to interact with.
          </p>

          <p>
            You can contact me to discuss your ideas, and I can&apos;t wait to
            build it for you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
