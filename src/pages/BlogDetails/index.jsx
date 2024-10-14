import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import blogImage from '@Assets/images/daniel-j-schwarz-Uz768OCP0O8-unsplash.jpg';

import blogDetailsStyles from './styles/blog-details.module.scss';

const BlogDetails = function BlogDetailsComponent() {
  const navigate = useNavigate();

  const handleBackButton = () => navigate(-1);

  return (
    <>
      <header className={blogDetailsStyles.blogHeader}>
        <Container>
          <Row className={blogDetailsStyles.blogHeaderRow}>
            <Col md={9} xl={8}>
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
          <Row className={blogDetailsStyles.blogCoverRow}>
            <Col md={9} xl={8}>
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
          <Row className={blogDetailsStyles.blogBodyRow}>
            <Col md={9} xl={8}>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                sit voluptate ratione nostrum facere deserunt, laborum et
                architecto dolorem cupiditate harum. Optio at eum natus
                voluptatem blanditiis, tempore maxime eveniet deserunt sint,
                asperiores tempora explicabo dignissimos quo incidunt dolorem,
                eos voluptatum recusandae sit necessitatibus totam inventore
                magnam nisi minus. Esse.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, optio. Repudiandae et perspiciatis ullam similique natus
                harum, maiores repellat provident voluptatum quaerat perferendis
                tempore laboriosam molestias rerum vitae animi, odio
                praesentium. Corrupti perferendis architecto excepturi
                repudiandae beatae cum modi deserunt sequi quo sint sapiente,
                harum culpa, quis recusandae nihil doloremque reprehenderit
                voluptas aliquam maxime! Et veniam accusantium asperiores fugiat
                cumque? Voluptates expedita officia modi. In sed quia accusamus
                nesciunt, molestias vero. Ipsam illo saepe ipsa error aperiam
                eos? Et, voluptates.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                explicabo magni fugiat. Porro eos molestias tempora, repudiandae
                veniam perferendis. Placeat asperiores praesentium velit
                temporibus at?
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={blogDetailsStyles.blogAction}>
        <Container>
          <Row className={blogDetailsStyles.blogActionRow}>
            <Col md={9} xl={8}>
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
