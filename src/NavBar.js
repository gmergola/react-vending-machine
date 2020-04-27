import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/Chips">
        Chips
      </NavLink>
      <NavLink exact to="/Candy">
        Candy
      </NavLink>
      <NavLink exact to="/Cookies">
        Cookies
      </NavLink>
    </nav>
  );
}

export default NavBar;