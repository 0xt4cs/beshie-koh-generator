import React from "react";
export const themes = {
  light: {
    backgroundColor: "#c9cebd",
    color: "#322e18",
  },
  dark: {
    backgroundColor: "#262322",
    color: "#c9cebd",
  },
};
export const ThemeContext = React.createContext(themes.light);
