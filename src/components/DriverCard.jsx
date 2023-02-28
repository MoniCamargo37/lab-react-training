import React from 'react';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  const stars = () => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        starsArray.push(<span key={i}>★</span>);
      } else {
        starsArray.push(<span key={i}>☆</span>);
      }
    }
    return starsArray;
  };

  return (
    <div className="driverCard">
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <div>{stars()}</div>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
