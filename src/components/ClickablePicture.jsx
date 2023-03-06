import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="Clickable Pic"
      onClick={handleClick}
    />
  );
};

export default ClickablePicture;
