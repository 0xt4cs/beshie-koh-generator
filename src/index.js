import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeContext, themes } from "./components/ThemeContext";
import "./styles.css";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <Header />
        <Body toggleTheme={toggleTheme} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
