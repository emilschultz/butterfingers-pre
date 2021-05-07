import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  text: "#000000",
  background: "#363537",
};

export const darkTheme = {
  body: "#000000",
  text: "#ffffff",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  html {
    font-size: 10px;
    line-height:1.5;
  }
body {
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
}
  
`;
