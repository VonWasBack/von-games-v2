import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from './GameCards.module.css';

const GameCards = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const gameCollection = collection(db, 'games');
      const gameSnapshot = await getDocs(gameCollection);
      const gameList = gameSnapshot.docs.map((doc) => doc.data());
      setGames(gameList);
    };
    fetchGames();
  }, []);
  return (
    <section id="games" className={styles.gameSection}>
      <h2 className={styles.sectionTitle}>Discover Our Games</h2>
      <div className={styles.cardContainer}>
        {games.map((game, index) => (
          <div className={styles.card} key={index}>
            <img src={game.image} alt={game.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{game.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameCards;
