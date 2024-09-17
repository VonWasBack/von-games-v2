// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyWebsite</div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
        </ul>
      </nav>
      <button className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
