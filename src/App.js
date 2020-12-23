import React, { useState } from "react";
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
    <Router basename="/react-pizza-app">
    <Switch>
          <Route exact path="/">
            <Customize ingredients = {ingredients} setIngredients={setIngredients} />
          </Route>
          
          <Route path="/checkout">
          <Checkout ingredients = {ingredients} />
          </Route>
        </Switch>
    </Router>
    </>
    
  );
};

export default App;
