import React from "react";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="title">
      <Link to='/'>
        <h1>{`GCCK Audio Engineer's Website`}</h1>
      </Link>
      </div>
      
      <nav className="welcome">
        <Link to="/About">
        <li>About</li>
        </Link>
        <Link to="/Feedback">
        <li>Feedback</li>
        </Link>
        <Link to="/Guide">
        <li>Guide</li>
        </Link>
        <Link to="/Picture">
        <li>Picture</li>
        </Link>
      </nav>
      
    </div>
  )
}

export default NavBar;