import { createGlobalStyle } from "styled-components";
import quicksandttf from "../public/fonts/quicksand/quicksand-v24-latin-regular.woff2";
import montserratwoff2 from "../public/fonts/montserrat/Montserrat-VF.woff2";
import jetbrainmonowoff2 from "../public/fonts/jetbrainsmono/JetBrainsMono-Regular.woff2";
import Theme from "../theme";

export default createGlobalStyle<{ theme: Theme }>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Quicksand";
    font-weight: 300 700;
    src: local("Quicksand Regular"),
    url(${quicksandttf}) format("truetype");
  }

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 100 900;
  src: local("Montserrat Regular"),
    url(${montserratwoff2}) format("woff2");
}

@font-face {
  font-family: "JetBrain Mono";
  font-style: normal;
  font-weight: 100 900;
  src: local("JetBrain Mono Regular"),
    url(${jetbrainmonowoff2}) format("woff2");
}

  html,
  body {
    font-family: montserrat;
      background-color: ${(p) => p.theme.backgroundColor};
      color: ${(p) => p.theme.color};
      transition: background-color 1s ease-in, color 1s ease-in;
  }

  h1, h2, h3 {
    font-family: quicksand;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  code {
    font-family: JetBrain Mono;
  }
`;
