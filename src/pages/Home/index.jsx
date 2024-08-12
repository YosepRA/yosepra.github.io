import React from 'react';

import styles from './styles/home.module.scss';

const Home = function HomeComponent() {
  return (
    <section className={styles.header}>
      <h1 className={styles.headerTitle}>StudioYosepRA</h1>
      <button type="button" className={styles.headerButton}>
        Button
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        accusamus dolor! Commodi a dolorum fugiat dolore asperiores laborum
        consequatur porro aliquid quas modi, earum atque accusamus, quasi, quod
        beatae soluta.
      </p>
    </section>
  );
};

export default Home;
