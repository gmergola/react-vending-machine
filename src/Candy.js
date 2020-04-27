import React from "react";
import { Link } from "react-router-dom";

/**Candy: renders info about Candy */
function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mixed-halloween-candy-background-royalty-free-image-176869502-1567700779.jpg?crop=1xw:0.74691xh;center,top&resize=1200:*"
        alt="Candy."
      />
      <p>So tasty!</p>
    <p><Link to="/">Go Back</Link></p> 
    </div>
  );
}

export default Candy;
