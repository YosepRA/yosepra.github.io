import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';

import { generateProjects, capitalizeFirstLetter } from '../utils/helpers';

const fakeProjects = generateProjects(5);

function createProjectCard(projects, handleModalOpen) {
  return projects.map((project) => {
    const { id, name, body } = project;

    return (
      <Col key={id} md={6} lg={4} as="article">
        <Card className="bg-dark text-white">
          <Card.Img
            src="https://via.placeholder.com/430x240/181a1a.png"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
            <Card.Text>{`${body.substring(0, 100)}...`}</Card.Text>
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
  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`${project.id} - ${project.name}`}</Modal.Title>
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
  const [activeProject, setActiveProject] = useState({});

  const handleModalOpen = (project) => {
    setActiveProject(project);
    setShow(true);
  };
  const handleModalClose = () => setShow(false);

  const projectCards = createProjectCard(fakeProjects, handleModalOpen);

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

          <ProjectDetails
            show={show}
            handleModalClose={handleModalClose}
            project={activeProject}
          />
        </section>
      </Col>
    </Row>
  );
}

export default Projects;
