import { ThemeProvider } from "styled-components";
import Header from "../src/Sections/Header";
import Footer from "../src/Sections/Footer";

import { darkTheme, lightTheme } from "../src/global/Themes";

import "./index.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
