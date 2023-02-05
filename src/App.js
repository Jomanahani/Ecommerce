import { drawerClasses } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useRoutes } from "react-router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/global/Themes";
import { themeContext } from "./Context/ThemeContext";
import { GlobalStyle } from "./global/style";

import "./index.css";
import { router as routes } from "./Router";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Subscribe from "./Sections/Subscribe";

function App() {
  const router = useRoutes(routes);

  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "light" ? lightTheme : darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Suspense fallback={<div className='spinner' />}>{router}</Suspense>
          <Subscribe />
          <Footer />
        </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
