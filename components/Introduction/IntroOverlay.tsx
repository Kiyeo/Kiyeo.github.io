import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";
import { useState, useEffect } from "react";

const IntroStyle = styled.div`
  font-family: "JetBrains Mono";
  opacity: 1;
  min-height: 100vh;
  position: fixed; /* Sit on top of the page content */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  font-size: clamp(1rem, 2vw + 1rem, 4rem);
  background-color: ${(p) => p.theme.backgroundColor};
  z-index: 2;
  animation: fadeOut;

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
`;

const IntroOverlay = () => {
  const intro = ["Hello!"];
  const [duration, setDuration] = useState(0);

  useEffect(() => {}, [duration]);

  return (
    <>
      <IntroStyle>
        {intro.map((e) => {
          setDuration(e.length / 8);
          return (
            <TypingAnimation
              typingDuration={duration}
              display={true}
              stringLength={e.length}
            >
              {e}
            </TypingAnimation>
          );
        })}
      </IntroStyle>
      ;
    </>
  );
};

const getTypingDuration = (sentence: string) => {
  return sentence.length / 8;
};

export default IntroOverlay;
