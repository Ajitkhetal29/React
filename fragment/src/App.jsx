import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Container from "./Container";

function App() {

  let FoodItem = ['Dal', 'Ghee', 'green Vegetable', 'Fruits']
  return (
    <Container>
      <h1>Healthy food</h1>
      <ul className="list-group">
        <li className="list-group-item">{FoodItem.map((item) => <li key={item} className="list-group-item">A{item}</li>)}</li>
        
      </ul>


      </Container>

  );
}

export default App;
