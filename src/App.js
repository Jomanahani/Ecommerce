import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/global/Themes";

import "./index.css";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
