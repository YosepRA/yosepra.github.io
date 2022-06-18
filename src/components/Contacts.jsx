import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mainStyles from '../styles/main.module.scss';
import contactStyles from '../styles/contact.module.scss';

function Contacts() {
  return (
    <Container>
      <Row className={mainStyles.contentSection} as="section">
        <Col>
          <section className="contacts">
            <header className={mainStyles.sectionHeader}>
              <h2 className={mainStyles.sectionTitle}>Contact Me</h2>
              <h3 className={mainStyles.sectionSubtitle}>
                and I will turn your ideas to reality.
              </h3>
            </header>

            <div className="contact-list">
              <Row className={contactStyles.contactListRow}>
                <Col
                  md={5}
                  lg={4}
                  xl={3}
                  className={contactStyles.contactSection}
                >
                  <div className={contactStyles.contactPoint}>
                    <span className={contactStyles.contactLogo}>
                      <FontAwesomeIcon icon="envelope" />
                    </span>
                    <span className="contact-text">
                      studioyosepra@gmail.com
                    </span>
                  </div>

                  <div className={contactStyles.contactPoint}>
                    <span className={contactStyles.contactLogo}>
                      <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                    </span>
                    <span className="contact-text">+6285861251765</span>
                  </div>
                </Col>

                <Col
                  md={5}
                  lg={4}
                  xl={3}
                  className={contactStyles.contactSection}
                >
                  <div className={contactStyles.contactPoint}>
                    <span className={contactStyles.contactLogo}>
                      <FontAwesomeIcon icon={['fab', 'telegram']} />
                    </span>
                    <span className="contact-text">YosepRA</span>
                  </div>

                  <div className={contactStyles.contactPoint}>
                    <span className={contactStyles.contactLogo}>
                      <FontAwesomeIcon icon={['fab', 'discord']} />
                    </span>
                    <span className="contact-text">YosepRA#4863</span>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
