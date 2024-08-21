import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ProjectCard from '@components/ui/ProjectCard/index.jsx';
import BlogCard from '@components/ui/BlogCard/index.jsx';

import homeStyles from './styles/home.module.scss';

const Home = function HomeComponent() {
  return (
    <>
      <section className={homeStyles.hero}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={homeStyles.heroLeft}>
                <h1 className={homeStyles.heroTitle}>
                  A Simple Man Who Loves to Create
                </h1>

                <div className={homeStyles.heroTechStack}>
                  <div className={homeStyles.heroTechItem} />
                  <div className={homeStyles.heroTechItem} />
                  <div className={homeStyles.heroTechItem} />
                </div>
              </div>
            </Col>

            <Col xs={12}>
              <div className="hero__right">
                <div className={homeStyles.heroIntro}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus esse officia molestias hic ipsa a dignissimos
                    repellat error at non? Porro pariatur nisi reprehenderit
                    corporis totam repellat architecto aperiam enim!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum, labore.
                  </p>
                </div>

                <div className={homeStyles.heroAction}>
                  <button type="button" className={homeStyles.heroActionBtn}>
                    Projects
                  </button>
                  <button type="button" className={homeStyles.heroActionBtn}>
                    Contact
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={homeStyles.projectList}>
        <Container>
          <Row>
            <Col>
              <h2 className={homeStyles.projectListTitle}>
                What I Have Built so Far
              </h2>
            </Col>
          </Row>

          <Row className={homeStyles.projectListProjectRow}>
            <Col xs={12}>
              <ProjectCard />
            </Col>

            <Col xs={12}>
              <ProjectCard />
            </Col>

            <Col xs={12}>
              <ProjectCard />
            </Col>
          </Row>

          <Row>
            <Col>
              <button type="button" className={homeStyles.projectListMoreBtn}>
                More
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={homeStyles.blogList}>
        <Container>
          <Row>
            <Col>
              <h2 className={homeStyles.blogListTitle}>Latest News</h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <BlogCard />
            </Col>

            <Col xs={12}>
              <BlogCard />
            </Col>

            <Col xs={12}>
              <BlogCard />
            </Col>
          </Row>

          <Row>
            <Col>
              <button type="button">More</button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact">
        <Container>
          <Row>
            <Col>
              <h2>Contact Me</h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div className="contact-list">
                <div className="contact-list__email">
                  <span className="contact-list__icon" />
                  <span className="contact-list__text">
                    studioyosepra@gmail.com
                  </span>
                </div>
                <div className="contact-list__whatsapp">
                  <span className="contact-list__icon" />
                  <span className="contact-list__text">(+62) 85861251765</span>
                </div>
                <div className="contact-list__discord">
                  <span className="contact-list__icon" />
                  <span className="contact-list__text">yosepra</span>
                </div>
              </div>
            </Col>

            <Col xs={12}>
              <div className="contact-form">
                <p className="contact-form__intro">
                  Or, you can contact me using this form
                </p>

                <Form>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      I will send my reply to your email.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="What can I help you with..."
                    />
                  </Form.Group>

                  <button type="submit">Send</button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
