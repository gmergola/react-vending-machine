import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Cookies from './Cookies';
import NavBar from './NavBar';
import { BrowserRouter, Route } from "react-router-dom";

/**App: routes VendingMachine, Chips, Cookies, Candy */
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/Chips">
          <Chips />
        </Route>
        <Route exact path="/Candy">
          <Candy />
        </Route>
        <Route exact path="/Cookies">
          <Cookies />
        </Route>

        </BrowserRouter>
      </div>
    );
}

export default App;
