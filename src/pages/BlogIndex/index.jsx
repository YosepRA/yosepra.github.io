import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { selectBlogList, fetchBlogList } from '@Features/blog/blog-slice.js';

import BlogCard from '@Components/ui/BlogCard/index.jsx';
import Pagination from '@Components/ui/Pagination/index.jsx';

import blogIndexStyles from './styles/blog-index.module.scss';

const BlogIndex = function BlogIndexComponent() {
  const blogs = useSelector(selectBlogList);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParams = parseInt(searchParams.get('page'), 10);

  useEffect(() => {
    const isPageParamsValid = !Number.isNaN(pageParams) && pageParams >= 1;

    if (!isPageParamsValid) {
      setSearchParams({ page: 1 });

      return undefined;
    }

    const limit = 10;
    const skip = (pageParams - 1) * limit;

    const contentfulParams = {
      limit,
      skip,
    };

    dispatch(fetchBlogList(contentfulParams));

    return undefined;
  }, [pageParams]);

  const blogList =
    blogs.items.length > 0 &&
    blogs.items.map((blog) => (
      <Col key={blog.sys.id} xs={12} lg={10}>
        <BlogCard blog={blog} />
      </Col>
    ));

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
          {/* <Row className={blogIndexStyles.blogIndexControlRow}>
            <Col lg={10}>
              <div className={blogIndexStyles.blogIndexControl}>
                <div className={blogIndexStyles.blogIndexControlItem} />
                <div className={blogIndexStyles.blogIndexControlItem} />
                <div className={blogIndexStyles.blogIndexControlItem} />
              </div>
            </Col>
          </Row> */}

          <Row className={blogIndexStyles.blogIndexListRow}>
            {blogs.items.length === 0 && blogs.status === 'loading' && (
              <Col xs={12} lg={10}>
                <p>Loading...</p>
              </Col>
            )}

            {blogs.items.length === 0 && blogs.status === 'idle' && (
              <Col xs={12} lg={10}>
                <p>No data</p>
              </Col>
            )}

            {blogs.items.length > 0 && blogList}
          </Row>

          <Row>
            <Col>
              <Pagination
                currentPage={pageParams}
                pageCount={blogs.pageCount}
                baseUrl="/blog"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogIndex;
