// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameCards from './components/GameCards';
import Footer from './components/Footer';
import './App.css'; // Import the base styles

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <GameCards />
      <Footer />
    </div>
  );
}

export default App;
