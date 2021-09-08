import React from 'react';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPlay,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTelegram,
  faDiscord,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Layout from './Layout.jsx';
import Hero from './Hero.jsx';
import WhyWebApplication from './WhyWebApplication.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
import { ToastProvider } from './toast/index.jsx';

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
  faTwitter,
  faGithub,
  faInfoCircle,
);

function App() {
  return (
    <Layout>
      <Container>
        <ToastProvider>
          <Hero />

          <WhyWebApplication />

          <Projects />

          <Contacts />
        </ToastProvider>
      </Container>
    </Layout>
  );
}

export default App;
