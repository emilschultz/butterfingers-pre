import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StateMachineProvider, createStore } from "little-state-machine";
import { EachItem } from "../context/EachItemContext";

import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
// import Footer from "../components/Footer";

createStore({
  data: {},
  individualResult: {},
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StateMachineProvider>
      <EachItem>
        <Main>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavBar />
            <Component {...pageProps} />
            {/* <button onClick={toggleTheme}>Switch Theme</button> */}
          </ThemeProvider>
        </Main>
      </EachItem>
    </StateMachineProvider>
  );
}

export default MyApp;
