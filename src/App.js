import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route } from "react-router-dom";

// UI Components
import Footer from "./components/Footer"
import NavBar from "./components/Navbar";

//  Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Feedback from './pages/Feedback'
import Guide from './pages/Guide'


// Styles
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/Feedback">
        <Feedback />
      </Route>

      <Route path="/Guide">
        <Guide className="guides"/>
      </Route>
        
      <Footer />
    </div>
  );
}

export default App;