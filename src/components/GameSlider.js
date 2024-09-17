// src/components/GameSlider.js
import React from 'react';
import Slider from 'react-slick';
import styles from './GameSlider.module.css';

const games = [
  { id: 1, title: 'Game One', image: 'https://example.com/game1.jpg' },
  { id: 2, title: 'Game Two', image: 'https://example.com/game2.jpg' },
  { id: 3, title: 'Game Three', image: 'https://example.com/game3.jpg' },
];

const GameSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {games.map((game) => (
        <div key={game.id} className={styles.slide}>
          <img src={game.image} alt={game.title} />
          <h3>{game.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default GameSlider;
