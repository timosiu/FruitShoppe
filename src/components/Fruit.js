/**
 * FRUIT.js
 * Contains the array for available fruits,
 * and functionality to manipulate said array
 */

import { useState, useEffect } from "react";
import "./Card.css";

export const availableFruits = [
  {
    id: 1,
    name: "Apple",
    pricePerKg: 1,
    weight: 250,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_960_720.jpg",
  },
  {
    id: 2,
    name: "Banana",
    pricePerKg: 1.5,
    weight: 200,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
  },
  {
    id: 3,
    name: "Orange",
    pricePerKg: 1.2,
    weight: 250,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/15/25/oranges-428072_960_720.jpg",
  },
  {
    id: 4,
    name: "Tomato",
    pricePerKg: 4,
    weight: 100,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/22/06/tomatoes-1239177_960_720.jpg",
  },
  {
    id: 5,
    name: "Pear",
    pricePerKg: 3,
    weight: 300,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg",
  },
  {
    id: 6,
    name: "Lemon",
    pricePerKg: 2.5,
    weight: 200,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2010/12/13/09/58/lemon-2014_960_720.jpg",
  },
  {
    id: 7,
    name: "Watermelon",
    pricePerKg: 3,
    weight: 2500,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2013/01/08/01/25/watermelon-74342_960_720.jpg",
  },
  {
    id: 8,
    name: "Mandarin",
    pricePerKg: 3,
    weight: 100,
    amount: 0,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/07/13/44/tangerines-1721597_960_720.jpg",
  },
];

const Fruit = (props) => {
  const [count, setCount] = useState(0);

  const countHandler = (choice) => {
    if (choice === "+") {
      setCount(count + 1);
    } else if (choice === "-" && count !== 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log("id: " + props.id + " amt: " + count);
    availableFruits[props.id - 1].amount = count;
    props.onCountChange();
    console.log(availableFruits);
  }, [count]);

  useEffect(() => {
    if (props.emptyCart) {
      availableFruits[props.emptyCartId - 1].amount = 0;
    }
  }, [props.emptyCart]);

  let storeButtons, itemDetails;

  storeButtons = (
    <div className="storeButtons">
      <button className="minusBtn" onClick={() => countHandler("-")}>
        -
      </button>
      {availableFruits[props.id - 1].amount}
      <button className="plusBtn" onClick={() => countHandler("+")}>
        +
      </button>
    </div>
  );

  itemDetails = (
    <div className="itemDetails">
      <p>Approx. weight: {props.weight}g</p>
      <p>{props.pricePerKg}€/Kg</p>
    </div>
  );

  return (
    <div className="cardWrapper">
      <img src={props.imageSrc} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      {itemDetails}
      {storeButtons}
    </div>
  );
};

export default Fruit;
