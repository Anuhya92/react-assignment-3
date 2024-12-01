import { useContext, useState } from "react";
import "./ColorPicker.css";
import { ThemeContext } from "../../App";

const ColorPicker = () => {
  const { selectedColor, setSelectedColor } = useContext(ThemeContext);

  const handleColorChange = (event) => {
    const newColorSelected = event.target.value;
    console.log(`New color: ${newColorSelected}`);
    setSelectedColor(newColorSelected);
  };

  return (
    <div className="color-picker-container">
      <label htmlFor="colorInput">Pick a color:</label>
      <input
        type="text"
        value={selectedColor}
        onChange={(e) =>
          handleColorChange({ target: { value: e.target.value } })
        }
      />
      <input
        type="color"
        id="colorInput"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
