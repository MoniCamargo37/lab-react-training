
import React from 'react'

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <strong>First name:</strong> {firstName}
      </div>
      <div>
        <strong>Last name:</strong> {lastName}
      </div>
      <div>
        <strong>Gender:</strong> {gender}
      </div>
      <div>
        <strong>Height:</strong> {height}cm
      </div>
      <div>
        <strong>Birth:</strong> {birth.toDateString()}
      </div>
    </div>
  );
};

export default IdCard;
