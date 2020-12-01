import React from "react";
import Base from "./images/PizzaBase.png";
import Basil from "./images/Basil.png";
import Mushroom from "./images/Mushroom.png";
import Olive from "./images/Olive.png";
import Pineapple from "./images/Pineapple.png";
import Tomato from "./images/Tomato.png";
import Cheese from "./images/BaseCheese.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";



const Customize = ({ ingredients, setIngredients }) => {
  //   const changeIngredients = (name) => {
  //     let newIngredients = JSON.parse(JSON.stringify(ingredients));
  //     newIngredients[name] = !newIngredients[name];
  //     setIngredients(newIngredients);
  //   };

  let history = useHistory();
  const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* {JSON.stringify(ingredients)} */}
        <div style={{ flex: 1, padding: 40, border: "3px solid black" }}>
          <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} >
            <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          </div>
        </div>
        <div style={{ border: "3px solid black", flex: 1 }}>
          <h1 className="heading">Ingredients</h1>
          <div className="labels">
          <label className="container-checkbox">
            Pineapple
            <input
              type="checkbox"
              checked={ingredients["pineapple"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "pineapple")
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Basil
            <input
              type="checkbox"
              checked={ingredients["basil"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "basil")
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Olive
            <input
              type="checkbox"
              checked={ingredients["olive"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "olive")
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Tomato
            <input
              type="checkbox"
              checked={ingredients["tomato"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "tomato")
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Mushroom
            <input
              type="checkbox"
              checked={ingredients["mushroom"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "mushroom")
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="container-checkbox">
            Cheese
            <input
              type="checkbox"
              checked={ingredients["cheese"]}
              onChange={(event) =>
                onChange(event.currentTarget.checked, "cheese")
              }
            />
            <span className="checkmark"></span>
          </label>
          <button
          onClick={() => history.push("/checkout")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customize;
