import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="content">
        <div className="contentHeader">
          <h2>Welcome to the FruitShoppe!</h2>
        </div>
        <div className="cardLinks">
          <Card
            title="Store"
            text="Shop for some delicious fruit!"
            imageSrc="https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg"
            imageLink="/store"
          />
          <Card
            title="Orders"
            text="View previous orders here!"
            imageSrc="https://cdn.pixabay.com/photo/2012/02/25/19/00/beige-16875_960_720.jpg"
            imageLink="/orders"
          />
          <Card
            title="Contact"
            text="Get in touch!"
            imageSrc="https://cdn.pixabay.com/photo/2016/02/26/01/13/telephone-1223310_960_720.jpg"
            imageLink="/contact"
          />
        </div>
        <div className="contentFooter">
          <Link to="/somePage">This link is no work</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
