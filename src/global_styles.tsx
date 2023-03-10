import {  css } from "@emotion/react";

const GlobalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
  }
`;

export default GlobalStyles;
