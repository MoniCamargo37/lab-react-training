import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
// This component allows users to select a color using RGB values.

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);
  //The handleColorChange function updates the corresponding color value (rValue, gValue, or bValue) when the user changes the value of a color picker component.
  const handleColorChange = (color, value) => {
    switch (color) {
      case 'R':
        setRValue(value);
        break;
      case 'G':
        setGValue(value);
        break;
      case 'B':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  const finalColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
  //In here it  renders four divs, each representing a color picker for one of the RGB values. Each color picker is represented by a SingleColorPicker component, which is passed a color (R, G, or B), and a callback function to handle changes to the color value.
  return (
    <div className="colorContainer">
      <div className="cardRGB">
        <div
          className="colorCard"
          style={{
            backgroundColor: `rgb(${rValue}, 0, 0)`,
            height: '100px',
            width: '100px',
          }}
        ></div>
        <div className="selectBtn">
          <SingleColorPicker
            color="R"
            value={rValue}
            onChange={handleColorChange}
          />
        </div>
      </div>
      <div className="cardRGB">
        <div
          className="colorCard"
          style={{
            backgroundColor: `rgb(0, ${gValue}, 0)`,
            height: '100px',
            width: '100px',
          }}
        ></div>
        <div className="selectBtn">
          <SingleColorPicker
            color="G"
            value={gValue}
            onChange={handleColorChange}
          />
        </div>
      </div>
      <div className="cardRGB">
        <div
          className="colorCard"
          style={{
            backgroundColor: `rgb(0, 0, ${bValue})`,
            height: '100px',
            width: '100px',
          }}
        ></div>
        <div className="selectBtn">
          <SingleColorPicker
            color="B"
            value={bValue}
            onChange={handleColorChange}
          />
        </div>
      </div>
      <div className="cardRGB">
        <div
          className="colorCard"
          style={{
            backgroundColor: finalColor,
            height: '100px',
            width: '100px',
          }}
        ></div>
        <div className="selectBtn">
          <p>
            RGB({rValue}, {gValue}, {bValue})
          </p>
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;
