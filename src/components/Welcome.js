import React from "react";
import Welcome_card from "./Welcome_card";
import "./Welcome.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Welcome() {
  return (
    <div className="welcome_container row mt-5 mx-auto d-flex justify-content-center col-12 flex-md-wrap flex-sm-wrap">
      <Zoom delay={200}>
        <Welcome_card
          img="../../img/welcome/bell.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Zoom>
      <Zoom delay={300}>
        <Welcome_card
          img="../../img/welcome/corn.jpg"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        />
      </Zoom>
      <Zoom delay={400}>
        <Welcome_card
          img="../../img/welcome/cereal.jpg"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos."
        />
      </Zoom>
    </div>
  );
}
export default Welcome;
