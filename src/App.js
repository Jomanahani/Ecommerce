import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

// style
import { darkTheme, lightTheme } from "../src/global/Themes";
import { GlobalStyle } from "./global/style";
import "./index.css";

// context
import { AuthContextProvider } from "./Context/authContext";
import { themeContext } from "./Context/ThemeContext";
import { Router } from "./Router";

function App() {
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
        <AuthContextProvider>
          <div className="App">
            <GlobalStyle />
            <Suspense fallback={<div className="spinner" />}>
              <Router/>
            </Suspense>
          </div>
        </AuthContextProvider>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
