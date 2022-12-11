/**
 * ShoppingCart.js - Component
 * Provides the functionality to collect items and send contents as an order
 */

import { availableFruits } from "./Fruit";
import Order from "./Order";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const removeItems = (fruitId) => {
    props.onEmpty(fruitId);
  };

  let priceTotal = 0;
  for (let x = 0; x < availableFruits.length; x++) {
    let cWeight = availableFruits[x].weight;
    let cPrice = availableFruits[x].pricePerKg;
    let cAmount = availableFruits[x].amount;
    let cTotal = (cWeight / 1000) * cPrice * cAmount;
    priceTotal = priceTotal + cTotal;
  }

  return (
    <div className="cartWrapper">
      <ul>
        {availableFruits.map((item) =>
          item.amount > 0 ? (
            <div className="itemWrapper">
              <p>{item.name}</p>
              <p>x{item.amount}</p>
              <p>
                Price:
                {((item.weight / 1000) * item.pricePerKg * item.amount).toFixed(
                  2
                )}
                €
              </p>

              <button
                className="emptyButton"
                onClick={() => removeItems(item.id)}
              >
                Remove
              </button>
            </div>
          ) : null
        )}
      </ul>
      <div className="cartFooter">
        <p>Total: {priceTotal.toFixed(2)}€</p>
        <Order fruits={availableFruits} finalPrice={priceTotal.toFixed(2)} />
      </div>
    </div>
  );
};

export default ShoppingCart;
