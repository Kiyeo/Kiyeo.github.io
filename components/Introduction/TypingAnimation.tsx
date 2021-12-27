import styled from "styled-components";

interface Props {
  typingDuration: number;
  stringLength: number;
}

export default styled.header<Props>`
  align-items: center;
  position: relative;
  width: max-content;
  clip-path: inset(0% 99% 0% 0%); /* t r b l */
  animation: typing ${(p) => p.typingDuration}s 1s
    steps(${(p) => p.stringLength}) forwards;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &::before {
    width: 0.1em;
    background: transparent;
    animation: caret ${(p) => p.typingDuration}s 1s
        steps(${(p) => p.stringLength}) forwards,
      blink 750ms infinite;
  }

  @keyframes typing {
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes caret {
    to {
      left: calc(100% - 0.1em);
    }
  }

  @keyframes blink {
    to {
      background-color: black;
    }
  }
`;
