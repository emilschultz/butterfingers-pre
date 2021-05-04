import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavBar />
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
console.log({ lightTheme });

export default MyApp;
