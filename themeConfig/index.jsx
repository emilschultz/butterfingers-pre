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

export const fonts = {
  text: "neue-haas-grotesk-text, sans-serif",
  display: "acumin-pro",
};

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

  html, body {
    height: 100vh;
    width: 100vw;
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
  font-family: ${() => fonts.text}, sans-serif; 
  font-weight: 400; 
  display: flex;
  justify-content: center;
}
  
`;
