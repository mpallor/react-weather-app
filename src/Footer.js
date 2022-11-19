import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <small>
          <a
            href="https://github.com/mpallor/react-weather-app"
            className="git-link"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <span> by Maria Pajor </span>
        </small>
      </footer>
    </div>
  );
}
