import styled from "styled-components";

interface Props {
  typingDuration: number;
  typingDelay: number;
  stringLength: number;
  isBackspace: boolean;
}

export default styled.code<Props>`
  position: absolute;
  top: 50%; /* 3 */
  transform: translate(0, -50%);
  opacity: ${(p) => (p.isBackspace ? 1 : 0)};
  width: max-content;
  padding-left: 0.1em;
  clip-path: inset(0% calc(100% - 0.1em) 0% 0%); /* t r b l */
  animation: typing ${(p) => p.typingDuration}s ${(p) => p.typingDelay}s
    steps(${(p) => p.stringLength}) forwards
    ${(p) =>
      p.isBackspace
        ? `,backspacing ${p.typingDuration}s ${p.typingDelay + 2}s steps(${
            p.stringLength
          }) forwards, hide 0.2s ${
            p.typingDuration + p.typingDelay + 2
          }s forwards
        `
        : `,show 0.1s ${p.typingDelay}s forwards`};

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
    animation: caret ${(p) => p.typingDuration}s ${(p) => p.typingDelay}s
        steps(${(p) => p.stringLength}) forwards
        ${(p) =>
          p.isBackspace &&
          `,caretbacking ${p.typingDuration}s ${p.typingDelay + 2}s
        steps(${p.stringLength}) forwards
        `},
      blink 750ms infinite;
  }

  @keyframes typing {
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes backspacing {
    to {
      clip-path: inset(0% calc(100% - 0.1em) 0% 0%);
    }
  }

  @keyframes caret {
    to {
      left: calc(100% - 0.1em);
    }
  }

  @keyframes caretbacking {
    to {
      left: 0;
    }
  }

  @keyframes blink {
    from,
    to {
      background-color: transparent;
    }
    50% {
      background-color: ${(p) => p.theme.accent};
    }
  }

  @keyframes hide {
    to {
      opacity: 0;
    }
  }
  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;
