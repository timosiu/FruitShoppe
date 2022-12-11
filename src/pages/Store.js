import "./Store.css";
import { useState, useEffect } from "react";
import Fruit, { availableFruits } from "../components/Fruit";
import ShoppingCart from "../components/ShoppingCart";

const Store = () => {
  const fruits = availableFruits;

  //This counter exists only to trigger re-renders
  const [count, setCount] = useState(0);
  const handleCountChange = () => {
    console.log("in handleCountChange");
    setCount(count + 1);
  };

  const [empty, setEmpty] = useState(false);
  const [emptyId, setEmptyId] = useState(0);

  const handleEmptying = (fruitKey) => {
    console.log("empty: " + fruitKey);
    setEmpty(true);
    setEmptyId(fruitKey);
  };

  useEffect(() => {
    if (empty === true) {
      setEmpty(false);
      setEmptyId(0);
    }
  }, [empty]);

  return (
    <div className="storeWrapper">
      <div className="itemsArea">
        <ul>
          {fruits.map((item) => (
            <>
              <Fruit
                key={item.id}
                id={item.id}
                title={item.name}
                weight={item.weight}
                pricePerKg={item.pricePerKg}
                imageSrc={item.imageUrl}
                onCountChange={() => handleCountChange()}
                emptyCart={empty}
                emptyCartId={emptyId}
              />
            </>
          ))}
        </ul>
      </div>
      <div className="cartSidebar">
        <h2>Your Cart</h2>
        <ShoppingCart items={fruits} onEmpty={(fId) => handleEmptying(fId)} />
      </div>
    </div>
  );
};

export default Store;
