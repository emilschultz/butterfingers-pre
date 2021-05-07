import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StateMachineProvider, createStore } from "little-state-machine";

import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

createStore({
  data: {},
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StateMachineProvider>
      <main style={{ width: "100vw" }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <NavBar />
          <Component {...pageProps} />
          <br />
          <br />
          <button onClick={toggleTheme}>Switch Theme</button>
        </ThemeProvider>
      </main>
    </StateMachineProvider>
  );
}

export default MyApp;
