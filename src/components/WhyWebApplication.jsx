import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

import mainStyles from '../styles/main.module.scss';
import whyWebStyles from '../styles/why-web-application.module.scss';

const content = [
  "Most people don't realize that their business problems can be solved by building a web application.",
  'Say you are a restaurant owner. I can build a reservation system with fully interactive seat layout according to your restaurant.',
  'Or maybe you are a farmer. I can build an online market for your commodities so that you can reach an even wider customers.',
  'Or perhaps you are an illustrator. I can build your online gallery that is fully customized to your style. A style which defines you as an artist.',
  'And so much more. If you want your idea to reach the whole world, building a web application is one of the best solution.',
  "My name is Yosep Ryan Agusta and I'm a MERN stack web developer. Using cutting edge web technologies, I will turn your ideas into reality. Contact me to discuss your ideas.",
];

function createCarouselItems(items) {
  return items.map((item) => (
    <Carousel.Item key={item.substring(0, 10)}>
      <p className={whyWebStyles.carouselContent}>{item}</p>
    </Carousel.Item>
  ));
}

function WhyWebApplication() {
  const carouselItems = createCarouselItems(content);

  return (
    <Row className={mainStyles.contentSection} as="section">
      <Col>
        <section className="why-web-application">
          <header className={mainStyles.sectionHeader}>
            <h2 className={mainStyles.sectionTitle}>
              Why Do You Need Web Application?
            </h2>
            <h3 className={mainStyles.sectionSubtitle}>
              and why I can build it for you.
            </h3>
          </header>

          <Carousel interval={6000}>{carouselItems}</Carousel>
        </section>
      </Col>
    </Row>
  );
}

export default WhyWebApplication;
