import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainStyles from '@styles/main02.module.scss';

const Navbar = function NavbarComponent() {
  return (
    <header className={mainStyles.navbar}>
      <nav>
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
                <ul className={mainStyles.navbarMenu}>
                  <li className={mainStyles.navbarMenuItem}>Home</li>
                  <li className={mainStyles.navbarMenuItem}>Projects</li>
                  <li className={mainStyles.navbarMenuItem}>Blog</li>
                  <li className={mainStyles.navbarMenuItem}>Contact</li>
                </ul>

                <div className={mainStyles.navbarSocial}>
                  <div className={mainStyles.navbarSocialItem} />
                  <div className={mainStyles.navbarSocialItem} />
                  <div className={mainStyles.navbarSocialItem} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
