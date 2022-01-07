import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../pages";

export default createGlobalStyle<{ theme: ThemeType }>`
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
      background-color: ${(p) => p.theme.backgroundColor}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
