import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaHeart } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const theme = React.useContext(ThemeContext);
  const isLightTheme = theme.backgroundColor === "#c9cebd";
  const themeClass = isLightTheme ? "light-theme" : "dark-theme";

  return (
    <div className={`container ${themeClass}`}>
      <footer className="app-footer">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://www.instagram.com/tacssuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/tacssuki"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/0xt4cs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          
          <div className="footer-info">
            <p className="footer-text">
              Made with <FaHeart className="heart-icon" /> by Jushtine Kylle Taculad
            </p>
            <p className="footer-year">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
