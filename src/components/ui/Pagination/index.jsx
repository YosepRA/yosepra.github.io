import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import createPaginationModel from '@Utils/pagination.js';

import styles from './styles/pagination.module.scss';

function createPaginationButtons(model, baseUrl) {
  const paginationButton = model.map(({ label, number, status }) => (
    <Link
      key={label}
      to={`${baseUrl}?page=${number}`}
      className={cn(styles.paginationItem, {
        [styles.paginationItemActive]: status === 'active',
        [styles.paginationItemDisabled]: status === 'disabled',
      })}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  ));

  return paginationButton;
}

const Pagination = function PaginationComponent({
  currentPage,
  pageCount,
  baseUrl,
}) {
  const model = createPaginationModel(currentPage, pageCount);
  const paginationButtons = createPaginationButtons(model, baseUrl);

  return (
    <section className={styles.pagination}>
      <div className={styles.paginationContainer}>{paginationButtons}</div>
    </section>
  );
};

export default Pagination;
