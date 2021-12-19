import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";

const IntroStyle = styled.div`
  font-family: "JetBrains Mono";
  min-height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
  font-size: 4em;
  background-color: ${(p) => p.theme.backgroundColor};
`;

const IntroPage = (props: any) => {
  const name = "Hello! My name is Leo.";
  const test1 = "Welcome to my website.";
  return (
    <>
      <IntroStyle>
        <TypingAnimation stringLength={name.length}>{name}</TypingAnimation>
        <TypingAnimation stringLength={test1.length} delay={2}>
          {test1}
        </TypingAnimation>
      </IntroStyle>
      ;
    </>
  );
};

export default IntroPage;
