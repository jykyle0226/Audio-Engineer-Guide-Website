import { useState } from "react";
import Create from "../components/Create";

const Home = (props) => {
    const [ pathURL, setPathURL ] = useState(null);

    const selectURL = (event) => {
        setPathURL(event.target.innerText.toLowerCase())
    }

    return(
        <div className="Home">
            <>
                <h1 className="HomeText">Welcome to {`GCCK Audio Engineer's Website!`}</h1>
                <p className="HomeText">{`GCCK Audio Engineer's Website`} has feedback data from previous services and guidelines to audio engineers at GCCK! </p>
            </>

        </div>
    );
};
export default Home;