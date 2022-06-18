import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import ProjectDetails from './ProjectDetails.jsx';

import mainStyles from '../styles/main.module.scss';
import projectStyles from '../styles/project.module.scss';

import { handlePromise } from '../utils/helpers.js';
import contentfulClient from './data/Contentful.js';

function createProjectCards(projects, handleModalOpen) {
  return projects.map((project) => {
    const {
      sys: { id },
      fields: { name, summary, images, githubLink, liveLink },
    } = project;

    return (
      <Col
        key={id}
        md={6}
        lg={4}
        as="article"
        className={projectStyles.project}
      >
        <Card className={cn(projectStyles.projectCard, 'bg-dark')}>
          <Card.Img src={images[0]} alt="Card image" />
          <Card.ImgOverlay className={projectStyles.projectOverlay}>
            <button
              type="button"
              className={cn(
                mainStyles.mainButton,
                projectStyles.projectOverlayBtn,
              )}
              onClick={() => handleModalOpen(project)}
            >
              <FontAwesomeIcon icon="info-circle" /> Details
            </button>

            <a
              href={liveLink}
              className={cn(
                mainStyles.mainButtonLink,
                projectStyles.projectOverlayBtn,
                { [mainStyles.btnDisabled]: !liveLink },
              )}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon="play" />{' '}
              {!liveLink ? 'Coming soon' : 'Live'}
            </a>

            <a
              href={githubLink}
              className={cn(
                mainStyles.mainButtonLink,
                projectStyles.projectOverlayBtn,
                { [mainStyles.btnDisabled]: !githubLink },
              )}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />{' '}
              {!githubLink ? 'Coming soon' : 'Source'}
            </a>
          </Card.ImgOverlay>
        </Card>

        <div className={projectStyles.projectMetadata}>
          <h4 className={projectStyles.projectMetadataName}>{name}</h4>
          <p className={projectStyles.projectMetadataSummary}>{summary}</p>
        </div>
      </Col>
    );
  });
}

function Projects() {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(async () => {
    const contentfulPromise = contentfulClient.getEntries({
      content_type: 'project',
    });
    const [data, error] = await handlePromise(contentfulPromise);

    setProjects(data.items);
  }, []);

  const handleModalOpen = (project) => {
    setActiveProject(project);
    setShow(true);
  };
  const handleModalClose = () => setShow(false);

  if (projects.length === 0) return null;

  const projectCards = createProjectCards(projects, handleModalOpen);

  return (
    <section className={cn(mainStyles.contentSection, projectStyles.projects)}>
      <Container>
        <Row>
          <Col>
            <section className="projects">
              <header className={mainStyles.sectionHeader}>
                <h2 className={mainStyles.sectionTitle}>My Projects</h2>
                <h3 className={mainStyles.sectionSubtitle}>
                  A few of what I&apos;ve built so far
                </h3>
              </header>

              <div className="project-list">
                <Row>{projectCards}</Row>
              </div>

              {activeProject !== null && (
                <ProjectDetails
                  show={show}
                  handleModalClose={handleModalClose}
                  project={activeProject}
                />
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
