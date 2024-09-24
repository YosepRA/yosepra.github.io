import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/blog-card.module.scss';

const BlogCard = function BlogCardComponent() {
  return (
    <article className={styles.blogCard}>
      <div className={styles.blogCardMeta}>
        <Link to="/blog/1" className={styles.blogCardLinkTitle}>
          <h3 className={styles.blogCardTitle}>
            The Latest Happening in the News
          </h3>
        </Link>

        <p className={styles.blogCardTime}>7 hours ago</p>
      </div>

      <p className={styles.blogCardExcerpt}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat neque
        molestiae, debitis consequatur nesciunt voluptas cumque ab molestias
        facere autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eligendi nulla doloribus quidem a natus, iste veritatis fuga enim
        suscipit quae, laborum dolore blanditiis libero consequatur cumque,
        adipisci ea voluptatibus eveniet?
      </p>
    </article>
  );
};

export default BlogCard;
