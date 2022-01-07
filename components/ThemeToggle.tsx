import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../theme";

interface Props {
  isToggle: boolean;
  lightTheme: Theme;
  darkTheme: Theme;
}

interface ThemeToggleProps {
  toggleTheme: (theme: Theme) => void;
  lightTheme: Theme;
  darkTheme: Theme;
}

const ThemeToggleDiv = styled.div`
  position: absolute;
  top: 5vh;
  right: 5vw;
  transform: translate3d(0, -50%, 0);

  & #input {
    display: none;
  }

  & #input:checked + .label .ball {
    transform: translate3d(24px, 0, 0);
  }
`;

const ThemeToggleLabel = styled.label<Props>`
  background-color: ${(p) =>
    p.isToggle ? p.darkTheme.backgroundColor : p.lightTheme.backgroundColor};
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  width: 50px;
  padding: 5px;
  border-radius: 24px;
  cursor: pointer;

  & .ball {
    position: absolute;
    border-radius: 50%;
    background-color: ${(p) =>
      p.isToggle ? p.darkTheme.color : p.lightTheme.color};
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    transition: transform 0.2s linear;
  }
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  toggleTheme,
  lightTheme,
  darkTheme,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <ThemeToggleDiv>
      <input
        id="input"
        type="checkbox"
        onChange={() => {
          setIsToggle(!isToggle);
          toggleTheme(!isToggle ? lightTheme : darkTheme);
        }}
      />
      <ThemeToggleLabel
        className="label"
        htmlFor="input"
        isToggle={isToggle}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      >
        <div className="ball" />
      </ThemeToggleLabel>
    </ThemeToggleDiv>
  );
};

export default ThemeToggle;
