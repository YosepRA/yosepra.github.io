import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Carousel,
  Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import mainStyles from '../styles/main.module.scss';
import projectStyles from '../styles/project.module.scss';

import { handlePromise } from '../utils/helpers.js';
import contentfulClient from './data/Contentful.js';

function createImagesCarousel(images, projectName) {
  const carouselItems = images.map((imgUrl) => (
    <Carousel.Item key={imgUrl}>
      <Image src={imgUrl} alt={projectName} fluid />
    </Carousel.Item>
  ));

  return (
    <Carousel interval={null} className="project-slider">
      {carouselItems}
    </Carousel>
  );
}

/*  Project modals.
  1. Only use one modal with dynamic project content.
  2. It must know which project card is clicked.
*/
function ProjectDetails({ project, show, handleModalClose }) {
  const {
    fields: { name, images, githubLink, liveLink, body },
  } = project;

  const imagesCarousel = createImagesCarousel(images, name);
  const bodyComponent = documentToReactComponents(body);

  return (
    <Modal show={show} onHide={handleModalClose} className="project-modal">
      <Modal.Header
        closeButton
        className={cn(
          projectStyles.projectModalHeader,
          projectStyles.modalHeaderOverride,
        )}
      />

      <Container
        className={cn(
          projectStyles.projectModalContainer,
          projectStyles.modalContainerOverride,
        )}
      >
        <Row className={projectStyles.projectModalSlider}>
          <Col>{imagesCarousel}</Col>
        </Row>

        <Row className={projectStyles.projectModalMetaData}>
          <Col xs={12}>
            <h2 className={projectStyles.projectModalTitle}>{name}</h2>
          </Col>
          <Col xs={12}>
            <a
              href={liveLink}
              className={cn(
                mainStyles.mainButtonLink,
                projectStyles.projectModalLinkBtn,
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
                projectStyles.projectModalLinkBtn,
                { [mainStyles.btnDisabled]: !githubLink },
              )}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />{' '}
              {!githubLink ? 'Coming soon' : 'Source'}
            </a>
          </Col>
        </Row>

        <Row className={projectStyles.projectModalBody}>
          <Col>{bodyComponent}</Col>
        </Row>
      </Container>
    </Modal>
  );
}

function createProjectCards(projects, handleModalOpen) {
  return projects.map((project) => {
    const {
      sys: { id },
      fields: { images, githubLink, liveLink },
    } = project;

    return (
      <Col key={id} md={6} lg={4} as="article">
        <Card className={cn(projectStyles.project, 'bg-dark')}>
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
    <Row className={mainStyles.contentSection} as="section">
      <Col>
        <section className="projects">
          <header className={mainStyles.sectionHeader}>
            <h2 className={mainStyles.sectionTitle}>
              What I Have Built So Far
            </h2>
            <h3 className={mainStyles.sectionSubtitle}>
              and it keeps counting.
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
  );
}

export default Projects;
