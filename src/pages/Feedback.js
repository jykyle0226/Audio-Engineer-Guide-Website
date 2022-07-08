import { useState } from "react";
import Create from '../components/Create'
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Feedback = (props) => {
  const [ pathURL, setPathURL ] = useState(null);

  const selectURL = (event) => {
      setPathURL(event.target.innerText.toLowerCase())
  }

  const URL = `http://localhost:3000/${pathURL}`
  const createFeedback = async (feedback) => {
    await fetch(URL, {
      method: 'POST',
      headers: {
          'Content-type': 'Application/json'
      },
      body: JSON.stringify(feedback)
    })
  }
  return(
      <div>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </div>
  );
};

export default Feedback;