import styled from "styled-components";

interface Props {
  stringLength: number;
  delay?: number;
}

export default styled.header<Props>`
  align-items: center;
  position: relative;
  width: max-content;
  clip-path: inset(0% calc(100% - 0.1em) 0% 0%); /* t r b l */
  animation: typing calc(1s * (${(p) => p.stringLength} / 8))
    ${(p) => (p.delay ? p.delay + 1 : 1)}s steps(${(p) => p.stringLength})
    forwards;

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
    animation: caret calc(1s * (${(p) => p.stringLength} / 8))
        ${(p) => (p.delay ? p.delay + 1 : 1)}s steps(${(p) => p.stringLength})
        forwards,
      blink 750ms ${(p) => (p.delay ? p.delay : 0)}s infinite;
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
