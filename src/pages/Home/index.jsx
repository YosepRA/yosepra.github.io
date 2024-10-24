import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  selectProjects,
  fetchProjects,
} from '@Features/project/projectSlice.js';
import { selectBlogs, fetchBlogs } from '@Features/blog/blogSlice.js';

import ProjectCard from '@Components/ui/ProjectCard/index.jsx';
import BlogCard from '@Components/ui/BlogCard/index.jsx';

import mongoDBIcon from '@Assets/icons/MongoDB-White.svg';
import nodeJSIcon from '@Assets/icons/NodeJS-White.svg';
import reactIcon from '@Assets/icons/React-White.svg';

import homeStyles from './styles/home.module.scss';

const Home = function HomeComponent() {
  const projects = useSelector(selectProjects);
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    const projectParams = {
      limit: 5,
    };
    const blogParams = {
      limit: 3,
    };

    dispatch(fetchProjects(projectParams));
    dispatch(fetchBlogs(blogParams));
  }, []);

  const projectList =
    projects.items.length > 0 &&
    projects.items.map((project) => (
      <Col key={project.sys.id} xs={12} md={6} lg={4}>
        <ProjectCard project={project} />
      </Col>
    ));

  const blogList =
    blogs.items.length > 0 &&
    blogs.items.map((blog) => (
      <Col key={blog.sys.id} xs={12} lg={10}>
        <BlogCard blog={blog} />
      </Col>
    ));

  return (
    <>
      <section className={homeStyles.hero}>
        <Container>
          <Row className={homeStyles.heroRow}>
            <Col xs={12} md={6} xl={5}>
              <div className={homeStyles.heroLeft}>
                <h1 className={homeStyles.heroTitle}>
                  A Simple Man Who Loves to Create
                </h1>

                <div className={homeStyles.heroTechStack}>
                  <img
                    src={reactIcon}
                    alt="React"
                    className={homeStyles.heroTechItem}
                  />
                  <img
                    src={nodeJSIcon}
                    alt="NodeJS"
                    className={homeStyles.heroTechItem}
                  />
                  <img
                    src={mongoDBIcon}
                    alt="MongoDB"
                    className={homeStyles.heroTechItem}
                  />
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} xl={5}>
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
                  <Link to="/project" className={homeStyles.heroActionProject}>
                    Projects
                  </Link>
                  <button
                    type="button"
                    className={homeStyles.heroActionContact}
                  >
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

          <Row className={cn(homeStyles.projectListProjectRow, 'gx-md-3')}>
            {projects.items.length === 0 && projects.status === 'loading' && (
              <p>Loading...</p>
            )}

            {projects.items.length === 0 && projects.status === 'data' && (
              <p>No data</p>
            )}

            {projects.items.length > 0 && projectList}
          </Row>

          <Row>
            <Col>
              <div className={homeStyles.projectListAction}>
                <Link to="project" className={homeStyles.projectListMoreBtn}>
                  More
                </Link>
              </div>
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

          <Row className={homeStyles.blogListBlogRow}>
            {blogs.items.length === 0 && blogs.status === 'loading' && (
              <p>Loading...</p>
            )}

            {blogs.items.length === 0 && blogs.status === 'data' && (
              <p>No data</p>
            )}

            {blogs.items.length > 0 && blogList}
          </Row>

          <Row>
            <Col>
              <div className={homeStyles.blogListAction}>
                <Link to="blog" className={homeStyles.blogListMoreBtn}>
                  More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className={homeStyles.contact}>
        <Container>
          <Row>
            <Col>
              <h2 className={homeStyles.contactTitle}>Contact Me</h2>
            </Col>
          </Row>

          <Row className={homeStyles.contactRow}>
            <Col xs={12} md={5} lg={4} xl={5}>
              <div className={homeStyles.contactList}>
                <div className={homeStyles.contactListItem}>
                  <span className={homeStyles.contactListIcon}>
                    <FontAwesomeIcon icon="envelope" />
                  </span>

                  <span className="contact-list__text">
                    studioyosepra@gmail.com
                  </span>
                </div>

                <div className={homeStyles.contactListItem}>
                  <span
                    className={cn(
                      homeStyles.contactListIcon,
                      homeStyles.contactListIconWhatsapp,
                    )}
                  >
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                  </span>

                  <span className="contact-list__text">(+62) 85861251765</span>
                </div>

                <div className={homeStyles.contactListItem}>
                  <span className={homeStyles.contactListIcon}>
                    <FontAwesomeIcon icon={['fab', 'discord']} />
                  </span>

                  <span className="contact-list__text">yosepra</span>
                </div>
              </div>
            </Col>

            <Col xs={12} md={7} lg={6} xl={5}>
              <div className={homeStyles.contactForm}>
                <p className={homeStyles.contactFormIntro}>
                  Or, you can contact me using this form
                </p>

                <Form>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text
                      className={cn(
                        homeStyles.contactFormInputNote,
                        homeStyles.contactFormInputNoteBsOverride,
                      )}
                    >
                      I will send my reply to your email.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="What can I help you with..."
                    />
                  </Form.Group>

                  <button type="submit" className={homeStyles.contactFormSend}>
                    Send
                  </button>
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
