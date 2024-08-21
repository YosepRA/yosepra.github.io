import React from 'react';

import styles from './styles/blog-card.module.scss';

const BlogCard = function BlogCardComponent() {
  return (
    <article className={styles.blogCard}>
      <div className={styles.blogCardMeta}>
        <h3 className={styles.blogCardTitle}>
          The Latest Happening in the News
        </h3>

        <p className={styles.blogCardTime}>7 hours ago</p>
      </div>

      <p className={styles.blogCardExcerpt}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat neque
        molestiae, debitis consequatur nesciunt voluptas cumque ab molestias
        facere autem?
      </p>
    </article>
  );
};

export default BlogCard;
