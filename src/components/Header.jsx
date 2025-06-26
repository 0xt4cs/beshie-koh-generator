import React from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const theme = React.useContext(ThemeContext);
  const isLightTheme = theme.backgroundColor === "#c9cebd";
  const themeClass = isLightTheme ? "light-theme" : "dark-theme";
  
  return (
    <div className={`container ${themeClass}`}>
      <header className={`app-header ${themeClass}`}>
        <div className="header-content">
          <div className="logo-section">
            <h1 className="app-title">
              <span className="emoji-decoration">🤸‍♂️</span>
              <span className="title-text">Beshie Koh Generator</span>
              <span className="emoji-decoration">🤸‍♀️</span>
            </h1>
            <p className="app-subtitle">
              The original Filipino meme text generator! Add "beshie koh" with cartwheel emojis! 🤸
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
