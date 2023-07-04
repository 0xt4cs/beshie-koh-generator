import React from "react";

function Header() {
  return (
    <header className="border-bottom lh-1 py-4">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1"></div>
        <div className="col-4 text-center">
          <a
            className="blog-header-logo text-body-emphasis text-decoration-none"
            href="/"
          >
            🤸‍♂️ Beshie 🤸‍♀️ Generator 🤸
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center"></div>
      </div>
    </header>
  );
}

export default Header;
