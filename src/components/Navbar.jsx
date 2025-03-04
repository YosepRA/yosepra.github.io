import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { selectDirectionY } from '@Features/scroll/scroll-slice.js';
import mainStyles from '@Styles/main.module.scss';

const Navbar = function NavbarComponent() {
  const [collapse, setCollapse] = useState(false);
  const directionY = useSelector(selectDirectionY);

  const handleCollapseToggle = () => {
    setCollapse((state) => !state);
  };

  const handleCollapseClose = () => {
    setCollapse(false);
  };

  return (
    <header
      className={cn(mainStyles.navbar, {
        [mainStyles.navbarHide]: directionY === 'down',
      })}
    >
      <nav>
        <Container className={mainStyles.navbarContainer}>
          <Row className="align-items-center">
            <Col xs="auto" md={12}>
              <Link to="/" className={mainStyles.navbarBrand}>
                StudioYosepRA
              </Link>
            </Col>

            <Col>
              <button
                type="button"
                className={mainStyles.navbarMenuToggle}
                onClick={handleCollapseToggle}
                aria-label="menu"
              >
                <FontAwesomeIcon icon="bars" />
              </button>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                className={cn(mainStyles.navbarCollapse, {
                  [mainStyles.navbarCollapseShow]: collapse,
                })}
              >
                <Container>
                  <Row>
                    <Col>
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
                          to="/#contact"
                          className={mainStyles.navbarMenuLink}
                          onClick={handleCollapseClose}
                        >
                          <li className={mainStyles.navbarMenuItem}>Contact</li>
                        </NavLink>
                      </ul>

                      <div className={mainStyles.navbarSocial}>
                        <a
                          href="https://github.com/YosepRA"
                          target="_blank"
                          rel="noreferrer"
                          className={mainStyles.navbarSocialItem}
                          aria-label="GitHub"
                        >
                          <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>

                        <a
                          href="https://www.linkedin.com/in/studioyosepra"
                          target="_blank"
                          rel="noreferrer"
                          className={mainStyles.navbarSocialItem}
                          aria-label="LinkedIn"
                        >
                          <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>

                        <a
                          href="https://x.com/studioyosepra"
                          target="_blank"
                          rel="noreferrer"
                          className={mainStyles.navbarSocialItem}
                          aria-label="X/Twitter"
                        >
                          <FontAwesomeIcon icon={['fab', 'square-x-twitter']} />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
