import React from "react";
import "./style.css";

function BadgeCard(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.name} />
      <span
        onClick={() => props.shuffleFriend(props.id)}
        className="shuffle"
      ></span>
    </div>
  );
}

export default BadgeCard;
