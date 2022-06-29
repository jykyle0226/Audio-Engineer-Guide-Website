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
                <h1 className="neonText">Welcome to {`GCCK Audio Engineer's Website!`}</h1>
                <p className="neonText">{`GCCK Audio Engineer's Website`} has feedback data from previous services and guidelines to audio engineers at GCCK! </p>
            </>
            <img 
            src="https://i.imgur.com/JSha1iu.png"
            className="MixerLeft"
            alt="..."/>
                    
        </div>
    );
};
export default Home;