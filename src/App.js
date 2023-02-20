import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

// style
import { darkTheme, lightTheme } from "../src/global/Themes";
import { GlobalStyle } from "./global/style";
import "./index.css";

// context
import { AuthContext } from "./Context/authContext";
import { themeContext } from "./Context/ThemeContext";
import { Auth, NotAuth } from "./Router";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isAuthorized, setIsAuthorized] = useState(false);
  console.log("isAuthorized", isAuthorized);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "light" ? lightTheme : darkTheme);
    }
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[isAuthorized, setIsAuthorized]}>
        <themeContext.Provider value={[theme, setTheme]}>
          <div className="App">
            <GlobalStyle />
            <Suspense fallback={<div className="spinner" />}>
              {isAuthorized ? <Auth /> : <NotAuth />}
            </Suspense>
          </div>
        </themeContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
