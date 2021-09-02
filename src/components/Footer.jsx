import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <p>StudioYosepRA &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
