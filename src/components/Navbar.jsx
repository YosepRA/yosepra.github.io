import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainStyles from '@styles/main02.module.scss';

const Navbar = function NavbarComponent() {
  return (
    <header className={mainStyles.navbar}>
      <Container className={mainStyles.navbarContainer}>
        <Row className="align-items-center">
          <Col>
            <p className={mainStyles.navbarBrand}>StudioYosepRA</p>
          </Col>

          <Col>
            <div className={mainStyles.navbarMenuToggle} />
          </Col>
        </Row>

        <Row>
          <Col>
            <div
              className={cn(mainStyles.navbarCollapse, {
                [mainStyles.navbarCollapseShow]: false,
              })}
            >
              <div className={mainStyles.navbarMenu}>
                <span className={mainStyles.navbarMenuItem}>Home</span>
                <span className={mainStyles.navbarMenuItem}>Projects</span>
                <span className={mainStyles.navbarMenuItem}>Blog</span>
                <span className={mainStyles.navbarMenuItem}>Contact</span>
              </div>

              <div className={mainStyles.navbarSocial}>
                <div className={mainStyles.navbarSocialItem} />
                <div className={mainStyles.navbarSocialItem} />
                <div className={mainStyles.navbarSocialItem} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;
