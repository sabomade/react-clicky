import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar fixed-top">
      <span class="navbar-text">Clicky Game</span>
      <span class="navbar-text">Click on an image to begin!</span>
      <span class="navbar-text">Score</span>
    </nav>
  );
}

export default Nav;
