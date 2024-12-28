import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles/project-card.module.scss';

const ProjectCard = function ProjectCardComponent({ project: { fields } }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardThumbnail}>
        <h3 className={styles.projectCardThumbnailTitle}>{fields.name}</h3>

        <p className={styles.projectCardThumbnailShortDesc}>
          {fields.shortDescription}
        </p>
      </div>

      <div className={styles.projectCardDetails}>
        <h3 className={styles.projectCardDetailsTitle}>{fields.name}</h3>

        <p className={styles.projectCardDetailsDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          ab explicabo a in veritatis alias accusamus maxime molestiae,
          cupiditate excepturi.
        </p>

        <div className={styles.projectCardDetailsAction}>
          <a
            href={fields.liveLink}
            className={styles.projectCardDetailsActionLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Live preview"
            title="Live preview"
          >
            <FontAwesomeIcon icon="play" />
          </a>
          <a
            href={fields.githubLink}
            className={styles.projectCardDetailsActionLink}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            title="GitHub repository"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>

          {/* If the project details page are ready, there will be slug URL from CMS.
          Therefore, show the button to that page. */}
          {fields.slug && (
            <a
              href="#"
              className={styles.projectCardDetailsActionLink}
              aria-label="Project details"
              title="Project details"
            >
              <FontAwesomeIcon icon="file-alt" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
