import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles/project-card.module.scss';

const ProjectCard = function ProjectCardComponent() {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardThumbnail}>
        <h3 className={styles.projectCardThumbnailTitle}>Project Name</h3>

        <p className={styles.projectCardThumbnailShortDesc}>
          Short description of the project
        </p>
      </div>

      <div className={styles.projectCardDetails}>
        <h3 className={styles.projectCardDetailsTitle}>Project Name</h3>

        <p className={styles.projectCardDetailsDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem eum
          repudiandae voluptas reiciendis quas ut eos, ipsum beatae?
        </p>

        <div className={styles.projectCardDetailsAction}>
          <a
            href="https://www.google.com"
            className={styles.projectCardDetailsActionLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Live preview"
          >
            <FontAwesomeIcon icon="play" />
          </a>
          <a
            href="https://www.github.com"
            className={styles.projectCardDetailsActionLink}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
            href="https://www.google.com"
            className={styles.projectCardDetailsActionLink}
            aria-label="Project details"
          >
            <FontAwesomeIcon icon="file-alt" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
