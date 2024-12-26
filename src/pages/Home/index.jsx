import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  selectProjectList,
  fetchProjectList,
} from '@Features/project/project-slice.js';
import { selectBlogList, fetchBlogList } from '@Features/blog/blog-slice.js';

import ProjectCard from '@Components/ui/ProjectCard/index.jsx';
import BlogCard from '@Components/ui/BlogCard/index.jsx';

import mongoDBIcon from '@Assets/icons/MongoDB-White.svg';
import nodeJSIcon from '@Assets/icons/NodeJS-White.svg';
import reactIcon from '@Assets/icons/React-White.svg';

import Contact from './Contact.jsx';
import homeStyles from './styles/home.module.scss';

const Home = function HomeComponent() {
  const projects = useSelector(selectProjectList);
  const blogs = useSelector(selectBlogList);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const projectParams = {
      limit: 5,
    };
    const blogParams = {
      limit: 3,
    };

    dispatch(fetchProjectList(projectParams));
    dispatch(fetchBlogList(blogParams));
  }, []);

  useEffect(() => {
    if (location.hash === '#contact') {
      const contact = document.getElementById('contact');

      contact.scrollIntoView();
    }
  }, [location.hash]);

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
                    Software development can be difficult and gritty. However,
                    when the building blocks are integrating together and works
                    well, there is no more satisfying feeling than that. That is
                    why I continue to build and learn.
                  </p>

                  <p>
                    Feel free to check out my works and contact me if you need
                    me to help you build your apps.
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

      <Contact />
    </>
  );
};

export default Home;
