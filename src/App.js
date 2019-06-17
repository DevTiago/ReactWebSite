import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import BigScreen from "./components/BigScreen";
import Chosen from "./components/Chosen";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel.js";


function App() {
  return (
    <div className="App">
      <Carousel />
      <div className="main_wrapper">
        <Welcome />
        <BigScreen />
        <Chosen />
      </div>
  <Footer />
    </div>
  );
}

export default App;
