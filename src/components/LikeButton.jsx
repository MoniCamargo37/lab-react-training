import React, { useState } from 'react';

function LikeButton() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [color1, setColor1] = useState('purple');
  const [color2, setColor2] = useState('purple');
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick1 = () => {
    setLikes1(likes1 + 1);
    setColor1(getRandomColor());
  };

  const handleClick2 = () => {
    setLikes2(likes2 + 1);
    setColor2(getRandomColor());
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <button
        className="like-btn"
        style={{ backgroundColor: color1 }}
        onClick={handleClick1}
      >
        {likes1} Likes
      </button>
      <button
        className="like-btn"
        style={{ backgroundColor: color2 }}
        onClick={handleClick2}
      >
        {likes2} Likes
      </button>
    </div>
  );
}

export default LikeButton;
