import OrderList from "../components/OrderList";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="ordersWrapper">
      <div className="orderHeader"></div>
      <div className="ordersList">
        <OrderList />
      </div>
    </div>
  );
};

export default Orders;
