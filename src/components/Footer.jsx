import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';

function Footer() {
  return (
    <Container as="footer" className={mainStyles.footer}>
      <Row>
        <Col>
          <p>StudioYosepRA &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
