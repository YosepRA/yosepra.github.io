import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cn from 'classnames';

import mainStyles from '../styles/main.module.scss';
import heroStyles from '../styles/hero.module.scss';
import logo from '../assets/logo.svg';
import reactLogo from '../assets/react.svg';
import nodejsLogo from '../assets/nodejs.svg';
import mongodbLogo from '../assets/mongodb.svg';
import expressLogo from '../assets/expressjs.svg';

function Hero() {
  const purposes = [
    'your business.',
    "your restaurant's reservation system.",
    'your online art gallery.',
    'your next musical concert.',
    'any of your needs.',
  ];

  const [purposeIndex, setPurposeIndex] = useState(0);
  const [textView, setTextView] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const type = () => {
    const activePurpose = purposes[purposeIndex];
    const nextIndex = deleting ? textIndex - 1 : textIndex + 1;
    const currentSubstring = activePurpose.substring(0, nextIndex);
    const hasReachStart = deleting && textIndex === 1;
    const hasReachEnd = textIndex === activePurpose.length - 1;

    if (hasReachStart) {
      setDeleting(false);
      setPurposeIndex((prev) => (prev === purposes.length - 1 ? 0 : prev + 1));
    } else if (hasReachEnd) {
      setDeleting(true);
    }

    setTextView(currentSubstring);
    setTextIndex(nextIndex);
  };

  useEffect(() => {
    let typingSpeed;
    const activePurpose = purposes[purposeIndex];

    if (textIndex === activePurpose.length) typingSpeed = 2400;
    else if (deleting) typingSpeed = 60;
    else typingSpeed = 120;

    const timeoutId = setTimeout(() => {
      type();
    }, typingSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [textIndex]);

  return (
    <section className={cn(mainStyles.contentSection, heroStyles.hero)}>
      <Container>
        <Row className={heroStyles.heroRow}>
          <Col xs={12} md={6} as="section" className={heroStyles.heroIdentity}>
            <img
              src={logo}
              alt="StudioYosepRA"
              className={heroStyles.heroLogo}
            />

            <div className={heroStyles.heroStack}>
              <img
                src={reactLogo}
                className={cn(
                  heroStyles.heroStackItem,
                  heroStyles.heroStackItemReact,
                )}
                alt="React logo"
              />

              <img
                src={nodejsLogo}
                className={heroStyles.heroStackItem}
                alt="Node.js logo"
              />

              <img
                src={mongodbLogo}
                className={heroStyles.heroStackItem}
                alt="MongoDB logo"
              />

              <img
                src={expressLogo}
                className={heroStyles.heroStackItem}
                alt="Express logo"
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            as="section"
            className={heroStyles.heroIntroduction}
          >
            <p className={heroStyles.heroTitle}>
              My name is{' '}
              <span className={heroStyles.heroTitleName}>
                Yosep Ryan Agusta
              </span>
            </p>
            <p className={heroStyles.heroCatchphrase}>
              I will build a <i>fully customized</i> web-based application for{' '}
              <span
                className={cn(heroStyles.heroCatchphrasePurpose, 'type-effect')}
              >
                {textView}
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
