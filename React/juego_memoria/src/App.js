import React, { useState, useEffect } from 'react';
import './App.css';

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

const generateCards = () => {
  const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
  const cards = [...symbols, ...symbols];
  return shuffleArray(cards);
};

const App = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs((prevPairs) => [...prevPairs, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedPairs.includes(cards[index])) {
      setFlippedIndices((prevIndices) => [...prevIndices, index]);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setMatchedPairs([]);
  };

  return (
    <div className="memory-game">
      <h1>ENCUENTRA SU PAREJA</h1>
      <div className="cards">
        {cards.map((symbol, index) => (
          <div
            key={index}
            className={`card ${flippedIndices.includes(index) || matchedPairs.includes(symbol) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndices.includes(index) || matchedPairs.includes(symbol) ? symbol : '❓'}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;
