import React, { useState } from "react";
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Customize from "./Customize";
import Checkout from './Checkout';

function App() {

  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  return (
    <>
    <Header />
    <Router>
    <Switch>
          <Route exact path="/">
            <Customize ingredients = {ingredients} setIngredients={setIngredients} />
          </Route>
          <Route path="/checkout">
          {/* <h1>Checkout</h1> */}
          <Checkout ingredients = {ingredients} />
          </Route>
        </Switch>
    </Router>
    </>
    
  );
}

export default App;
