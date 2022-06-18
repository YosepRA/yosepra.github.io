import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';

function Footer() {
  return (
    <Container fluid as="footer" className={mainStyles.footer}>
      <Row>
        <Col>
          <p className={mainStyles.footerBlock}>
            StudioYosepRA &copy; {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
