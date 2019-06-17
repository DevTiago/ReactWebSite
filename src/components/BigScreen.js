import React from "react";
import { Card } from "react-bootstrap";

import "./BigScreen.css";

function BigScreen() {
  return (
    <Card className="bs_container mx-auto">
      <Card.Body>
        <div className="bs_text">
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Officia id ad, impedit quos nulla ab.</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="bs_button" style={{outline: 'none'}}>Learn more</button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default BigScreen;
