// src/components/Hero.js
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to Von Games</h1>
        <p className={styles.subtitle}>The best place to discover new games</p>
        <a href="#games" className={styles.ctaButton}>Explore Games</a>
      </div>
    </section>
  );
};

export default Hero;
