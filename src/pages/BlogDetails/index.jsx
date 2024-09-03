import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import blogImage from '@assets/images/daniel-j-schwarz-Uz768OCP0O8-unsplash.jpg';

import blogDetailsStyles from './styles/blog-details.module.scss';

const BlogDetails = function BlogDetailsComponent() {
  const navigate = useNavigate();

  const handleBackButton = () => navigate(-1);

  return (
    <>
      <header className={blogDetailsStyles.blogHeader}>
        <Container>
          <Row>
            <Col>
              <h1 className={blogDetailsStyles.blogTitle}>
                The Implementation of Wireframe in UI Design
              </h1>
              <p className={blogDetailsStyles.blogDate}>
                Friday, July 12, 2024
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <section className={blogDetailsStyles.blogCover}>
        <Container>
          <Row>
            <Col>
              <img
                src={blogImage}
                className={blogDetailsStyles.blogImage}
                alt="Mountain Apex"
              />

              <small className={blogDetailsStyles.blogImageCredit}>
                <i>Picture by Alex Kosniak 2024</i>
              </small>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={blogDetailsStyles.blogBody}>
        <Container>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                laborum nostrum unde architecto eligendi. Alias dolores
                voluptatibus et facere consequuntur, eius delectus vitae hic
                corporis voluptatem qui quam odio exercitationem?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, aspernatur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis illo enim non ratione accusamus, impedit animi optio
                esse qui necessitatibus deserunt aut saepe explicabo. Ad natus
                dicta voluptatibus adipisci doloremque amet similique quo
                magnam? Adipisci optio ullam id minus qui!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                quam quibusdam itaque facere labore ratione sequi beatae, est
                possimus aut.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae neque odio corporis explicabo ea at.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-action">
        <Container>
          <Row>
            <Col>
              <button
                type="button"
                onClick={handleBackButton}
                className={blogDetailsStyles.blogActionBack}
              >
                &lt; Go back
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
