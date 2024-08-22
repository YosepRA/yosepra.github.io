import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainStyles from '@styles/main02.module.scss';

const Navbar = function NavbarComponent() {
  const [collapse, setCollapse] = useState(false);

  const handleCollapseToggle = () => {
    setCollapse((state) => !state);
  };

  const handleCollapseClose = () => {
    setCollapse(false);
  };

  return (
    <header className={mainStyles.navbar}>
      <nav>
        <Container className={mainStyles.navbarContainer}>
          <Row className="align-items-center">
            <Col>
              <p className={mainStyles.navbarBrand}>StudioYosepRA</p>
            </Col>

            <Col>
              <div
                className={mainStyles.navbarMenuToggle}
                onClick={handleCollapseToggle}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                className={cn(mainStyles.navbarCollapse, {
                  [mainStyles.navbarCollapseShow]: collapse,
                })}
              >
                <ul className={mainStyles.navbarMenu}>
                  <NavLink
                    to="/"
                    className={mainStyles.navbarMenuLink}
                    onClick={handleCollapseClose}
                  >
                    <li className={mainStyles.navbarMenuItem}>Home</li>
                  </NavLink>

                  <NavLink
                    to="/project"
                    className={mainStyles.navbarMenuLink}
                    onClick={handleCollapseClose}
                  >
                    <li className={mainStyles.navbarMenuItem}>Project</li>
                  </NavLink>

                  <NavLink
                    to="/blog"
                    className={mainStyles.navbarMenuLink}
                    onClick={handleCollapseClose}
                  >
                    <li className={mainStyles.navbarMenuItem}>Blog</li>
                  </NavLink>

                  <NavLink
                    to="/"
                    className={mainStyles.navbarMenuLink}
                    onClick={handleCollapseClose}
                  >
                    <li className={mainStyles.navbarMenuItem}>Contact</li>
                  </NavLink>
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
