
const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(color, event.target.value);
  };

  return (
    <div>
      <label htmlFor={`color-${color}`}>{`${color.toUpperCase()}: `}</label>
      <input
        id={`color-${color}`}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={handleInputChange}
      />
      
    </div>
  );
};

export default SingleColorPicker;

