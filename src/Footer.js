import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <small>
          <a
            href="https://github.com/mpallor/weather-react"
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
