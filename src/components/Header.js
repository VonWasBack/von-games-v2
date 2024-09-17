// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll'; // Use for smooth scrolling
import { NavLink } from 'react-router-dom'; // Use for internal navigation
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Von Games</div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="games" smooth={true} duration={500}>Games</Link></li>
          {/* Use NavLink for real navigation */}
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
