import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import ScrollContext from './scroll/index.jsx';

import mainStyles from '../styles/main.module.scss';

function Header() {
  const { isScrollingDown } = useContext(ScrollContext);

  return (
    <Navbar
      variant="dark"
      expand="md"
      fixed="top"
      className={cn(mainStyles.header, {
        [mainStyles.headerScroll]: isScrollingDown,
      })}
    >
      <Container>
        <Navbar.Brand
          className={cn(mainStyles.headerBrand, mainStyles.navbarBrandOverride)}
        >
          StudioYosepRA
        </Navbar.Brand>

        <div className="social-media">
          <a
            href="https://github.com/YosepRA"
            target="_blank"
            rel="noreferrer"
            className={mainStyles.headerSocial}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
            href="https://www.linkedin.com/in/yosepra"
            target="_blank"
            rel="noreferrer"
            className={mainStyles.headerSocial}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
