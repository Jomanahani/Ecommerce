import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/global/Themes";
import { themeContext } from './Context/ThemeContext';
import { GlobalStyle } from "./global/style";

import "./index.css";
import Cart from "./Pages/Cart";
import Electronics from "./Pages/Electronics";
import Home from "./Pages/Home";
import Item from "./Pages/Item";
import Register from "./Pages/Register";
import SelectedItems from "./Pages/SelectedItems";
import SignIn from "./Pages/SignIn";

function App() {
  const localTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState( lightTheme);
  console.log(localTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme==='light'?lightTheme:darkTheme);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme.theme);
    }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
      <div className="App">
      <GlobalStyle />
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home /> } />
        <Route path="/SelectedItems" element={<SelectedItems /> } />
        <Route path="/Electronics" element={<Electronics /> } />
        <Route path="/Item" element={<Item /> } />
        <Route path="/Cart" element={<Cart /> } />
        </Routes>
      </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
