import React from 'react';

function NumbersTable({ limit }) {
  const numbersArr = [];

  for (let i = 1; i <= limit; i++) {
    numbersArr.push(i);
  }

  return (
    <div className="numbersTable">
      {numbersArr.map((num) => (
        <div
          key={num}
          className="numberItem"
          style={{ backgroundColor: num % 2 === 0 ? 'red' : 'white' }}
        >
          {num}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
