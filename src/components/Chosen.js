import React, { Component } from "react";
import ChosenBox from "./ChosenBox";

import "./Chosen.css";

class Chosen extends Component {
  state = {
    promotions: [
      {
        id: 1,
        category: "Vegetables",
        img: '../../img/vegetables.jpg'
      },
      {
        id: 2,
        category: "Fruits",
        img: '../../img/fruits.jpg'
      },
      {
        id: 3,
        category: "Desserts",
        img: '../../img/desserts.jpg'
      },
      {
        id: 4,
        category: "Bread",
        img: '../../img/bread.jpg'
      }
    ]
  };

  render() {
    let { promotions } = this.state;
    return (
      <div>
        <ul className="boxes">
            {promotions.map(promotion => {
              return <ChosenBox key={promotion.id} promotion={promotion} />;
            })}

        </ul>
      </div>
    );
  }
}

export default Chosen;
