import React from 'react';
import { Container, Row, Col, Modal, Carousel, Image } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import mainStyles from '../styles/main.module.scss';
import projectStyles from '../styles/project.module.scss';

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
const ProjectDetails = function ProjectDetailsComponent({
  project,
  show,
  handleModalClose,
}) {
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
};

export default ProjectDetails;
