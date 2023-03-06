import React, { useState } from 'react';
import emptyDiceImage from '../assets/images/dice-empty.png';
import oneDiceImage from '../assets/images/dice1.png';
import twoDiceImage from '../assets/images/dice2.png';
import threeDiceImage from '../assets/images/dice3.png';
import fourDiceImage from '../assets/images/dice4.png';
import fiveDiceImage from '../assets/images/dice5.png';
import sixDiceImage from '../assets/images/dice6.png';

const diceImages = [
  emptyDiceImage,
  oneDiceImage,
  twoDiceImage,
  threeDiceImage,
  fourDiceImage,
  fiveDiceImage,
  sixDiceImage,
];

const Dice = () => {
  const [currentDiceImage, setCurrentDiceImage] = useState(threeDiceImage);
  const [rolling, setRolling] = useState(false);

  const handleDiceClick = () => {
    if (!rolling) {
      setRolling(true);
      setCurrentDiceImage(threeDiceImage);

      setTimeout(() => {
        const randomDiceIndex = Math.floor(Math.random() * diceImages.length);
        const randomDiceImage = diceImages[randomDiceIndex];
        setCurrentDiceImage(randomDiceImage);
        setRolling(false);
      }, 50);
    }
  };

  return (
    <img
      src={currentDiceImage}
      alt="Dice"
      style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      onClick={handleDiceClick}
    />
  );
};

export default Dice;
