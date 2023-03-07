import React, { useState } from 'react';
import profiles from '../data/berlin.json';
//This component displays a list of profiles from a JSON file. It has functions to filter the profiles by country, and to show more information when clicking on a profile.


//This function sets two states: the index of the selected profile and the selected country. There are also three event handlers that allow the user to select a profile, show all profiles or select a country.

function FaceBook() {
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(-1);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleProfileClick = (index) => {
    setSelectedProfileIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleShowAllClick = () => {
    setSelectedProfileIndex(-1);
    setSelectedCountry('');
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebookCard">
      {/* displays all countries  */}
      <button onClick={handleShowAllClick}>All</button>

      {/* country buttons  */}
      {profiles
        .map((profile) => profile.country)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map((country, index) => (
          <button key={index} onClick={() => handleCountryClick(country)}>
            {country}
          </button>
        ))}

      {/* it shows students filtered by country  */}
      {profiles
        .filter((profile) =>
          selectedCountry ? profile.country === selectedCountry : true
        )
        .map((profile, index) => (
          <div
            key={index}
            style={{
              border: '1px solid black',
              backgroundColor:
                selectedProfileIndex === index ? '#AFEEEE' : 'white',
            }}
            onClick={() => handleProfileClick(index)}
          >
            {/* first it shows only the picture by default */}
            <img src={profile.img} alt={profile.firstName} />

            {/* more info when we clic on the picture */}
            {selectedProfileIndex === index && (
              <div className="profileCardFace">
                <h1>Name:</h1>{' '}
                <p>
                  {profile.firstName} {profile.lastName}
                </p>
                <h1>Country:</h1> <p>{profile.country}</p>
                <h1>Type: </h1>{' '}
                <p>{profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default FaceBook;
