import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar fixed-top">
      <span className="navbar-text">Clicky Game</span>
      <span className="navbar-text">Click on an image to begin!</span>
      <span className="navbar-text">Score: {props.count}</span>
    </nav>
  );
}

export default Nav;
