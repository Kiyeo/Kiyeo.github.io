import { createGlobalStyle } from "styled-components";
import Theme from "../theme";

export default createGlobalStyle<{ theme: Theme }>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: quicksand, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: ${(p) => p.theme.backgroundColor};
      color: ${(p) => p.theme.color};
      transition: background-color 1s ease-in, color 1s ease-in;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
