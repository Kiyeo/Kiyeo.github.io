import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";

interface Props {
  duration: number;
}

const IntroStyle = styled.div<Props>`
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
  animation: fadeOut 1s ${(p) => p.duration * 4}s forwards;

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
`;

const IntroOverlay = () => {
  const intro = ["Hello!"];
  let duration = intro[0].length / 8;
  return (
    <>
      <IntroStyle duration={duration}>
        {intro.map((e) => {
          duration = e.length / 8;
          return (
            <TypingAnimation typingDuration={duration} stringLength={e.length}>
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
