import React from 'react';

import styles from './styles/project-card.module.scss';

const ProjectCard = function ProjectCardComponent() {
  return (
    <article className={styles.projectCard}>
      <h3 className={styles.projectCardMainTitle}>Project Name</h3>

      <p className={styles.projectCardMainShortDesc}>
        Short description of the project
      </p>
    </article>
  );
};

export default ProjectCard;
