import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  selectProjectList,
  fetchProjectList,
} from '@Features/project/projectSlice.js';

import ProjectCard from '@Components/ui/ProjectCard/index.jsx';
import Pagination from '@Components/ui/Pagination/index.jsx';

import projectIndexStyles from './styles/project-index.module.scss';

const ProjectIndex = function ProjectIndexComponent() {
  const projects = useSelector(selectProjectList);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParams = parseInt(searchParams.get('page'), 10);

  useEffect(() => {
    const isPageParamsValid = !Number.isNaN(pageParams) && pageParams >= 1;

    /* Page validation:
      - Case #1:
        - Current page: 150
        - Page count: 100
        -Expected result: invalid

      - Case #2:
        - Current page: -2
        - Page count: 10
        -Expected result: invalid

      - Case #3:
        - Current page: 2
        - Page count: 8
        -Expected result: valid
    */

    if (!isPageParamsValid) {
      // If page params is not valid, go to page 1 by default.
      setSearchParams({ page: 1 });

      return undefined;
    }

    const limit = 10;
    const skip = (pageParams - 1) * limit;

    const contentfulParams = {
      limit,
      skip,
    };

    dispatch(fetchProjectList(contentfulParams));

    return undefined;
  }, [pageParams]);

  const projectList =
    projects.items.length > 0 &&
    projects.items.map((project) => (
      <Col key={project.sys.id} xs={12} md={6} lg={4}>
        <ProjectCard project={project} />
      </Col>
    ));

  return (
    <>
      <header className={projectIndexStyles.projectHeader}>
        <Container>
          <Row>
            <Col>
              <h1 className={projectIndexStyles.projectTitle}>Project Index</h1>
              <p className={projectIndexStyles.projectSubtitle}>
                What I have built so far
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <section className={projectIndexStyles.projectIndex}>
        <Container>
          <Row>
            <Col>
              <div className={projectIndexStyles.projectIndexControl}>
                <div className={projectIndexStyles.projectIndexControlItem} />
                <div className={projectIndexStyles.projectIndexControlItem} />
                <div className={projectIndexStyles.projectIndexControlItem} />
              </div>
            </Col>
          </Row>

          <Row
            className={cn(projectIndexStyles.projectIndexListRow, 'gx-md-3')}
          >
            {projects.items.length === 0 && projects.status === 'loading' && (
              <Col>
                <p>Loading...</p>
              </Col>
            )}

            {projects.items.length === 0 && projects.status === 'idle' && (
              <Col>
                <p>No data</p>
              </Col>
            )}

            {projects.items.length > 0 && projectList}
          </Row>

          <Row>
            <Col>
              <Pagination
                currentPage={pageParams}
                pageCount={projects.pageCount}
                baseUrl="/project"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectIndex;
