import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cn from 'classnames';

import mainStyles from '../styles/main.module.scss';
import introductionStyles from '../styles/introduction.module.scss';

const Introduction = function IntroductionComponent() {
  return (
    <Row
      className={cn(mainStyles.contentSection, introductionStyles.introduction)}
      as="section"
    >
      <Col>
        <p>
          My name is Yosep Ryan Agusta, a web developer who specializes on MERN
          stack. But most importantly, <b>I&apos;m a problem solver.</b>
        </p>

        <p>
          I will build a web-based application that will solve your problems.
          Through my expertise in using a modern technology stack, I will create
          an application that works well and fun to interact with.
        </p>

        <p>
          You can contact me to discuss your problems, and I can&apos;t wait to
          solve it for you.
        </p>
      </Col>
    </Row>
  );
};

export default Introduction;
