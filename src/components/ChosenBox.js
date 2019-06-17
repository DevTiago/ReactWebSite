import React from "react";
import { Card } from "react-bootstrap";
import "./ChosenBox.css";

function ChosenBox(props) {
  return (
    <Card className="chosen_box" style={{backgroundImage: 'url(' + props.promotion.img + ')', 
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Card.Body >
        <h2>{props.promotion.category}</h2>
      </Card.Body>
    </Card>
  );
}
export default ChosenBox; 
