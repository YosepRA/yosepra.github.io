import React from 'react';
import cn from 'classnames';

import styles from './styles/pagination.module.scss';

const Pagination = function PaginationComponent() {
  return (
    <section className={styles.pagination}>
      <a href="#" className={styles.paginationItem}>
        &lt;
      </a>
      <a href="#" className={styles.paginationItem}>
        1
      </a>
      <a href="#" className={styles.paginationItem}>
        2
      </a>
      <a
        href="#"
        className={cn(styles.paginationItem, styles.paginationItemActive)}
      >
        3
      </a>
      <a href="#" className={styles.paginationItem}>
        4
      </a>
      <a href="#" className={styles.paginationItem}>
        5
      </a>
      <a href="#" className={styles.paginationItem}>
        &gt;
      </a>
    </section>
  );
};

export default Pagination;
