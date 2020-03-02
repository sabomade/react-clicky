import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar fixed-top">
      <span className="navbar-text">Clicky Game</span>
      <span className="navbar-text">{props.info}</span>
      <span className="navbar-text">
        Score: {props.count} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}

export default Nav;
