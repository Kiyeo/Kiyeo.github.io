import React, { useState } from "react";

const Menu = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <input type="checkbox" id="menu" className="menu"></input>
      <label
        htmlFor="menu"
        className={`menu__label ${isToggle ? "active" : ""}`}
        onClick={() => handleIsToggle()}
      >
        <span>Menu</span>
      </label>
    </>
  );
};

export default Menu;
