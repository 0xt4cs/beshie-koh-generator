import React from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const theme = React.useContext(ThemeContext);
  const isLightTheme = theme.backgroundColor === "#c9cebd";
  const themeClass = isLightTheme ? "light-theme" : "dark-theme";
  return (
    <header
      className={`border-bottom lh-1 py-4 ${themeClass}`}
      style={{
        backgroundColor: theme.backgroundColor,
        color: `${theme.color} !important`,
      }}
    >
      <div className="row text center align-items-center">
        <a
          className={`blog-header-logo text-body-emphasis text-decoration-none ${themeClass}`}
          href="/"
          style={{ color: `${theme.color} !important` }}
        >
          🤸‍♂️ Beshie 🤸‍♀️ Generator 🤸
        </a>
        <div className="col-4 d-flex justify-content-end align-items-center"></div>
      </div>
    </header>
  );
}

export default Header;
