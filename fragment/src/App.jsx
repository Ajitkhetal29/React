import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Container from "./Container";
import FoodInput from "./FoodInput";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let FoodItem = ['Dal', 'Ghee', 'green Vegetable', 'Fruits']

  const handleByButtonClick = (item) => {
    console.log(`${item} Buy Button Clicked`);
  }

  return (
    <Container>
      <h1>Healthy food</h1>
      <FoodInput></FoodInput>
      <ul className="list-group">
        <li className="list-group-item">{FoodItem.map((item) => <li key={item} className="list-group-item">{item} <button type="button" class="btn btn-info"  onClick={() => handleByButtonClick(item)} >Buy</button>
        </li>)}</li>
        
      </ul>


      </Container>

  );
}

export default App;
