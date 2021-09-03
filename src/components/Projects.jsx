import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';

import { capitalizeFirstLetter, handlePromise } from '../utils/helpers';
import createContentfulClient, {
  contentfulSpaceId,
  contentfulAccessToken,
} from './data/Contentful';

function createProjectCard(projects, handleModalOpen) {
  return projects.map((project) => {
    const {
      sys: { id },
      fields: { name, images },
    } = project;

    return (
      <Col key={id} md={6} lg={4} as="article">
        <Card className="bg-dark text-white">
          <Card.Img src={images[0]} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
            <Button variant="primary" onClick={() => handleModalOpen(project)}>
              Open modal
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Col>
    );
  });
}

/*  Project modals.
  1. Only use one modal with dynamic project content.
  2. It must know which project card is clicked.
*/
function ProjectDetails({ project, show, handleModalClose }) {
  const {
    sys: { id },
    fields: { name },
  } = project;

  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`${id} - ${name}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleModalClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Projects() {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(async () => {
    const contentfulClient = await createContentfulClient(
      contentfulSpaceId,
      contentfulAccessToken,
    );
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

  const projectCards = createProjectCard(projects, handleModalOpen);

  return (
    <Row>
      <Col>
        <section className="projects">
          <header className="section-header">
            <h2 className="section-title">What I Have Built So Far</h2>
            <h3 className="section-subtitle">and it keeps counting.</h3>
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
