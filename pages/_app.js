import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StateMachineProvider, createStore } from "little-state-machine";
import { EachItem } from "../context/EachItemContext";
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import Head from "next/head";
import Link from "next/link";
import NavBarStyle from "../components/NavBarStyle";
import Main from "../components/Main";

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
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/tnx1pja.css" />
      </Head>
      <EachItem>
        <Main>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavBarStyle>
              <div>
                <li>
                  <Link href="/lost">
                    <a>Lost</a>
                  </Link>
                </li>
                <li>
                  <Link href="/found">
                    <a>Found</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </div>
              <li>
                <Link href="/">
                  <a className="bf-logo">Butterfingers</a>
                </Link>
              </li>
              <button onClick={toggleTheme}>Switch Theme</button>
            </NavBarStyle>
            <Component {...pageProps} />
          </ThemeProvider>
        </Main>
      </EachItem>
    </StateMachineProvider>
  );
}

export default MyApp;
