import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game</h1>
        <p className="lead">
          Click on am image to score a point. Be careful not to click on the
          same image twice or you'll lose!
        </p>
      </div>
    </div>
  );
}

export default Header;
