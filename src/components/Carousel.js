import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css";
import "./slider-animations.css";
import "./styles.css";
import './Carousel.css'

class Carousel extends Component {
  state = {
    content: [
      {
        title: "Title 1",
        description:
          "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
        button: "Read More",
        image: "../../img/carousel/img1.jpg"
      },
      {
        title: "Eat Organic",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit...",
        button: "Discover",
        image: "../../img/carousel/img2.jpg"
      },
      {
        title: "Phasellus volutpat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit porttitor ligula.",
        button: "Buy now",
        image: "../../img/carousel/img3.jpg"
      }
    ]
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button style={{outline: 'none'}}>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
