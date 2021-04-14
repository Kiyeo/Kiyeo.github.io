import React, { useState } from "react";

const Menu = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <label
        htmlFor="nav-toggle"
        className={isToggle ? "nav-toggle-label active" : "nav-toggle-label"}
        onClick={() => handleIsToggle()}
      >
        <span>Menu</span>
      </label>
    </>
  );
};

export default Menu;
