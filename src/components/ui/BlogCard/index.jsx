import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

import styles from './styles/blog-card.module.scss';

const BlogCard = function BlogCardComponent({ blog: { sys, fields } }) {
  return (
    <article className={styles.blogCard}>
      <div className={styles.blogCardMeta}>
        <Link to={`/blog/${sys.id}`} className={styles.blogCardLinkTitle}>
          <h3 className={styles.blogCardTitle}>{fields.title}</h3>
        </Link>

        <p className={styles.blogCardTime}>
          {formatDistanceToNow(sys.createdAt, {
            addSuffix: true,
          })}
        </p>
      </div>

      <p className={styles.blogCardExcerpt}>{fields.excerpt}</p>
    </article>
  );
};

export default BlogCard;
