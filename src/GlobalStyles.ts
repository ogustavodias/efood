// styled-components
import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFFFFF",
  whiteRed: "#FFEBD9",
  black: "#000000",
  red: "#E66767",
  beige: "#FFF8F2",
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: inherit;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }

  body {
    background-color: ${colors.beige};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    padding: 64px 20px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
