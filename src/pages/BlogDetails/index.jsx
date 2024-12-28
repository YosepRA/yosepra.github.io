import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from 'date-fns';

import {
  selectBlogPostAndStatus,
  fetchBlogPost,
  resetBlogPost,
} from '@Features/blog/blog-slice.js';

import blogDetailsStyles from './styles/blog-details.module.scss';

const BlogDetails = function BlogDetailsComponent() {
  const { blog, status } = useSelector(selectBlogPostAndStatus);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBlogPost(id));

    return () => {
      dispatch(resetBlogPost());
    };
  }, []);

  const handleBackButton = () => navigate(-1);

  return (
    <>
      {blog === null && status === 'loading' && (
        <Container>
          <Row>
            <Col md={9} xl={8}>
              <p>Loading...</p>
            </Col>
          </Row>
        </Container>
      )}

      {blog && (
        <>
          <header className={blogDetailsStyles.blogHeader}>
            <Container>
              <Row className={blogDetailsStyles.blogHeaderRow}>
                <Col md={9} xl={8}>
                  <h1 className={blogDetailsStyles.blogTitle}>
                    {blog.fields.title}
                  </h1>
                  <p className={blogDetailsStyles.blogDate}>
                    {format(blog.sys.createdAt, 'EEEE, MMMM d, yyyy')}
                  </p>
                </Col>
              </Row>
            </Container>
          </header>

          {blog.fields.coverImage && (
            <section className={blogDetailsStyles.blogCover}>
              <Container>
                <Row className={blogDetailsStyles.blogCoverRow}>
                  <Col md={9} xl={8}>
                    <img
                      src={blog.fields.coverImage}
                      className={blogDetailsStyles.blogImage}
                      alt={blog.fields.coverImageAltText}
                    />

                    <small className={blogDetailsStyles.blogImageCredit}>
                      <i>Picture by {blog.fields.coverImageCredit}</i>
                    </small>
                  </Col>
                </Row>
              </Container>
            </section>
          )}

          <section className={blogDetailsStyles.blogBody}>
            <Container>
              <Row className={blogDetailsStyles.blogBodyRow}>
                <Col md={9} xl={8}>
                  {documentToReactComponents(blog.fields.body)}
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
      )}
    </>
  );
};

export default BlogDetails;
