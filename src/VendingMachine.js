import React from "react";
import { NavLink } from "react-router-dom";
import './VendingMachine.css';

/**VendingMachine: renders VendingMachine component
 * shows links for snacks
 */
function VendingMachine() {
  return (
  <div>
    <h1>Vending Vending</h1>
    <div className="VendingMachine">
      <div>
        <NavLink exact to="/Chips">
          Chips
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/Candy">
          Candy
        </NavLink>
      </div>
      <div>
      <NavLink exact to="/Cookies">
        Cookies
      </NavLink>
      </div>
    </div>
  </div>
  );
}

export default VendingMachine;