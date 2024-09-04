import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from '@components/ui/ProjectCard/index.jsx';
import Pagination from '@components/ui/Pagination/index.jsx';

import projectIndexStyles from './styles/project-index.module.scss';

const ProjectIndex = function ProjectIndexComponent() {
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
            <Col xs={12} md={6}>
              <ProjectCard />
            </Col>

            <Col xs={12} md={6}>
              <ProjectCard />
            </Col>

            <Col xs={12} md={6}>
              <ProjectCard />
            </Col>

            <Col xs={12} md={6}>
              <ProjectCard />
            </Col>

            <Col xs={12} md={6}>
              <ProjectCard />
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

export default ProjectIndex;
