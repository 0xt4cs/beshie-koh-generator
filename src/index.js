import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeContext, themes } from "./components/ThemeContext";
import "./styles.css";

function App() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('beshie-koh-theme');
    return savedTheme === 'dark' ? themes.dark : themes.light;
  });

  React.useEffect(() => {
    localStorage.setItem('beshie-koh-theme', theme === themes.dark ? 'dark' : 'light');
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`app ${theme === themes.light ? 'light-theme' : 'dark-theme'}`}
        style={{
          background: theme === themes.light 
            ? 'linear-gradient(135deg, #c9cebd 0%, #a8b5a3 100%)' 
            : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: theme.color,
          minHeight: '100vh',
          transition: 'all 0.3s ease'
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
