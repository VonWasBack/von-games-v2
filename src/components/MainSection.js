// src/components/MainSection.js
import React from 'react';
import styles from './MainSection.module.css';

const MainSection = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Welcome to My Responsive Website</h1>
        <p>This is a responsive website built with React and CSS modules.</p>
      </section>
      <section className={styles.content}>
        <div className={styles.box}>Box 1</div>
        <div className={styles.box}>Box 2</div>
        <div className={styles.box}>Box 3</div>
      </section>
    </main>
  );
};

export default MainSection;
