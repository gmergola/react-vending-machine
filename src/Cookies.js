import React from "react";
import { Link } from "react-router-dom";


/**Cookies: renders info about Cookies */
function Cookies() {
  return (
    <div>
      <h1>Cookies</h1>
      <img
        src="https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"
        alt="Cookies."
      />
      <p>So tasty!</p>
    <p><Link to="/">Go Back</Link></p> 
    </div>
  );
}

export default Cookies;