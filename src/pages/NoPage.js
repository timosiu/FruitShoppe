import { Link } from "react-router-dom";
import "./NoPage.css";
const NoPage = () => {
    return(
        <div className="noPageWrapper">
            <h2>Page Not Found!</h2>
            <Link to="/">Go home!</Link>
        </div>
    )
}

export default NoPage;