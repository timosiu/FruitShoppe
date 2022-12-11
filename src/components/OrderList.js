/**
 * ORDERLIST.JS - TO FETCH & RENDER ORDERS
 */

import { useState, useEffect } from "react";

const OrderList = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    const response = await fetch(
      "https://fruitshoppe-997ec-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
    );
    const data = await response.json();
    console.log(data);
    const fetchedOrders = [];

    for (const key in data) {
      fetchedOrders.push({
        id: key,
        fruit: data[key].fruits.join(" "),
        price: data[key].price,
        date: data[key].date,
      });
    }
    setOrders(fetchedOrders);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  let content;

  if (!loading) {
    content = (
      <div className="orderListWrapper">
        {orders.map((order) => (
          <>
            <ul>
              <div className="cardWrapper">
                <div key={order.id}>
                  <h3>Order {order.date.slice(0, 21)}</h3>
                  <h3>Fruits: </h3>
                  <p>{order.fruit} </p>
                  <h3>Price: </h3>
                  <p>{order.price}€</p>
                </div>
              </div>
            </ul>
          </>
        ))}
      </div>
    );
  } else {
    content = (
      <div className="orderListWrapper">
        <h3>Loading orders, please wait...</h3>
      </div>
    );
  }

  return <div className="orderListWrapper">{content}</div>;
};

export default OrderList;
