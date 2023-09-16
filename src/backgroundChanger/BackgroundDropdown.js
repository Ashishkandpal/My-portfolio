import React from "react";
import "../styles/backgroundDropdown.css";

const BackgroundDropdown = ({ bgHandler }) => {
  const valHandler = (val) => {
    bgHandler(val);
  };

  const randomNumGenerator = () => {
    const random = Math.round(Math.random() * (9 - 0) + 0);
    return random;
  };
  return (
    <div id="bg-dropdown-container">
      <p id="bg-changer" onClick={() => valHandler(randomNumGenerator)}>
        Random Theme
      </p>
    </div>
  );
};

export default BackgroundDropdown;
