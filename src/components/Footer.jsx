import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';

function Footer() {
  return (
    <footer className={mainStyles.footer}>
      <Container>
        <Row>
          <Col xs={12}>
            <p className={mainStyles.footerBrand}>StudioYosepRA</p>
          </Col>

          <Col xs={12}>
            <p className={mainStyles.footerCopy}>
              &copy; {new Date().getFullYear()} StudioYosepRA. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
