/*
 * ORDER.js
 * Gets the order from ShoppingCart, jsonifies and posts.
 */

import { Link } from "react-router-dom";

const Order = (props) => {
  const parseFruits = (fruits) => {
    const boughtFruits = [];

    for (let x = 0; x < fruits.length; x++) {
      if (fruits[x].amount !== 0) {
        boughtFruits[x] = fruits[x].name;
      }
    }
    return boughtFruits;
  };

  const handleOrder = () => {
    let parsedFruits = parseFruits(props.fruits);
    let priceTotal = props.finalPrice;
    let orderDate = Date();
    const order = {
      fruits: parsedFruits,
      price: priceTotal,
      date: orderDate,
    };

    postOrder(order);
  };

  const postOrder = async (order) => {
    const response = await fetch(
      "https://fruitshoppe-997ec-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="orderWrapper">
      <Link to="/orders">
        <button className="orderButton" onClick={() => handleOrder()}>
          Place order
        </button>
      </Link>
    </div>
  );
};

export default Order;
