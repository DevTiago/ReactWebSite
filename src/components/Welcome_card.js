import React from "react";
import "./Welcome_card.css";

function Welcome_card(props) {
  return (
    <div className="card card_welcome m-1 d-flex align-items-center">
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Welcome_card;
