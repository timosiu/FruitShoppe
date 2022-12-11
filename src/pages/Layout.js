import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return(
        <>
        <div className="layoutWrapper">
            <h2>🍎🍏FruitShoppe🍏🍎</h2>
            <div className="navButton">
                <Link to="/">Home</Link>
            </div>
            <div className="navButton">
                <Link to="/store">Store</Link>
            </div>
            <div className="navButton">
                <Link to="/orders">Orders</Link>
            </div>
            <div className="navButton">
                <Link to="/contact">Contact</Link>
            </div>
        </div>

        <Outlet />
        </>
    )
}

export default Layout;
