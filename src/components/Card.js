/**
 * CARD.JS - UI ELEMENT COMPONENT
 * PROPS:
 * title = Put title or name of item here
 * text = Additional info, etc
 * imageSrc = Path to image
 * imageLink = Where the image links to
 */

import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  //--Conditional Content--
  let imageVariables;

  if (props.imageLink !== null) {
    imageVariables = (
      <Link to={props.imageLink}>
        <img src={props.imageSrc} alt="" />
      </Link>
    );
  } else {
    imageVariables = <img src={props.imageSrc} alt="" />;
  }
  //--End Conditional Content--

  return (
    <div className="cardWrapper">
      {imageVariables}
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
