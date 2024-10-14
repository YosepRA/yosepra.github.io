import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogCard from '@Components/ui/BlogCard/index.jsx';
import Pagination from '@Components/ui/Pagination/index.jsx';

import blogIndexStyles from './styles/blog-index.module.scss';

const BlogIndex = function BlogIndexComponent() {
  return (
    <>
      <header className={blogIndexStyles.blogHeader}>
        <Container>
          <Row>
            <Col>
              <h1 className={blogIndexStyles.blogTitle}>Blog Index</h1>
              <p className={blogIndexStyles.blogSubtitle}>
                A bit of stories along the way
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <section className={blogIndexStyles.blogIndex}>
        <Container>
          <Row className={blogIndexStyles.blogIndexControlRow}>
            <Col lg={10}>
              <div className={blogIndexStyles.blogIndexControl}>
                <div className={blogIndexStyles.blogIndexControlItem} />
                <div className={blogIndexStyles.blogIndexControlItem} />
                <div className={blogIndexStyles.blogIndexControlItem} />
              </div>
            </Col>
          </Row>

          <Row className={blogIndexStyles.blogIndexListRow}>
            <Col xs={12} lg={10}>
              <BlogCard />
            </Col>

            <Col xs={12} lg={10}>
              <BlogCard />
            </Col>

            <Col xs={12} lg={10}>
              <BlogCard />
            </Col>

            <Col xs={12} lg={10}>
              <BlogCard />
            </Col>

            <Col xs={12} lg={10}>
              <BlogCard />
            </Col>
          </Row>

          <Row>
            <Col>
              <Pagination />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogIndex;
