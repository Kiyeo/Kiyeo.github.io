import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";

const IntroStyle = styled.section`
  min-height: 100vh;
  display: flex;
  place-content: center;
  justify-items: center;
  font-size: clamp(1rem, 2vw + 1rem, 4rem);
`;

const IntroSection = () => {
  const intros = ["Hello!", "Welcome to my website."];
  const durations = intros.map((e) => getTypingDuration(e));
  return (
    <>
      <IntroStyle id="home">
        {intros.map((e, index) => {
          return (
            <TypingAnimation
              key={index}
              typingDuration={durations[index]}
              typingDelay={
                index > 0
                  ? durations
                      .slice(1, index + 1)
                      .reduce((pv, cv) => pv + cv, 0) + 1
                  : durations[index]
              }
              stringLength={e.length}
              isBackspace={index === intros.length - 1 ? false : true}
            >
              {e}
            </TypingAnimation>
          );
        })}
      </IntroStyle>
    </>
  );
};

const getTypingDuration = (sentence: string) => {
  return sentence.length / 8;
};

export default IntroSection;
