import React from 'react';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPlay,
  faInfoCircle,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTelegram,
  faDiscord,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { ScrollProvider } from '@foo-software/react-scroll-context';

import Layout from './Layout.jsx';
import Hero from './Hero.jsx';
// import WhyWebApplication from './WhyWebApplication.jsx';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
import { ToastProvider } from './toast/index.jsx';
import ScrollContext from './scroll/index.jsx';
import ScrollUpButton from './ScrollUpButton.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrap-overrides.scss';
import '../styles/html.scss';

// Fontawesome library build up.
library.add(
  faEnvelope,
  faPlay,
  faDiscord,
  faTelegram,
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faInfoCircle,
  faAngleUp,
);

function App() {
  return (
    <ScrollProvider Context={ScrollContext}>
      <Layout>
        <ScrollUpButton />

        <Container>
          <ToastProvider>
            <Hero />

            <Introduction />

            <Projects />

            <Contacts />
          </ToastProvider>
        </Container>
      </Layout>
    </ScrollProvider>
  );
}

export default App;
