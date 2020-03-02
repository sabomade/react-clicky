import React from "react";
import "./style.css";

function BadgeCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default BadgeCard;
