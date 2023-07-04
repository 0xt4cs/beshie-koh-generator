import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © {new Date().getFullYear()} Jushtine Kylle Taculad
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.facebook.com/tacssuki"
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
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
