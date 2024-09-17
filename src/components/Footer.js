// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
      <p>&copy; 2024 Von Games. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
