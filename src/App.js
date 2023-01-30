import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/global/Themes";

import "./index.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SelectedItems from "./Pages/SelectedItems";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/home" element={<Home /> } />
        <Route path="/SelectedItems" element={<SelectedItems /> } />
        </Routes>
        {/* <Home /> */}
        {/* <SignIn /> */}
        {/* <Register /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
