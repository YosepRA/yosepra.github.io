import React from 'react';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Layout from './Layout';
import Hero from './Hero';
import WhyWebApplication from './WhyWebApplication';
import Projects from './Projects';
import Contacts from './Contacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/html.scss';

// Fontawesome library build up.
library.add(faEnvelope, faPlay, faWhatsapp, faGithub);

function App() {
  return (
    <Layout>
      <Container>
        <Hero />

        <WhyWebApplication />

        <Projects />

        <Contacts />
      </Container>
    </Layout>
  );
}

export default App;
