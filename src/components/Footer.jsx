import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const theme = React.useContext(ThemeContext);
  const isLightTheme = theme.backgroundColor === "#c9cebd";
  const themeClass = isLightTheme ? "light-theme" : "dark-theme";

  return (
    <div className={`container ${themeClass}`}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 border-top">
        <div className={`col-md-4 d-flex align-items-center ${themeClass}`}>
          <span
            className="mb-3 mb-md-0 text-body-secondary"
            style={{ color: `${theme.color} !important` }}
          >
            © {new Date().getFullYear()} Jushtine Kylle Taculad
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.facebook.com/tacssuki"
              style={{ color: `${theme.color} !important` }}
            >
              <FaInstagram size={25} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/tacssuki/"
            >
              <FaFacebook size={25} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://github.com/tacssuki"
            >
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
