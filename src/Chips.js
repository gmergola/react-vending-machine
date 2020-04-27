import React, { useState } from "react";
import { Link } from "react-router-dom";

/**Chips: renders info about Chips */
function Chips() {
  //{left: number, top: number, right: number, bottom: number}
  const [chipsPosition, setChipsPosition] = useState([]);
  
  /**addChipsPosition: adds a new chip position to state */
  function addChipsPosition(){
    let left = Math.floor(Math.random() * 100);
    let top = Math.floor(Math.random() * 100);
    let right = Math.floor(Math.random() * 100);
    let bottom = Math.floor(Math.random() * 100);
    let newPosition = {position: "relative", left, top, right, bottom, width: 100, height: 100, margin: 10}
    setChipsPosition(oldPositions => [...oldPositions, newPosition]);
  }
  
  const chips = chipsPosition.map((position, i) => (
    <img
    key={i}
    style={ position }
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg"
    alt="Chips."
  />)
  );
  return (
    <div>
      <h1>Chips</h1>
      <button onClick={addChipsPosition}>Add Chips</button>
      <p>So tasty!</p>
      {chips}
    <p><Link to="/">Go Back</Link></p> 
    </div>
  );
}

export default Chips;
