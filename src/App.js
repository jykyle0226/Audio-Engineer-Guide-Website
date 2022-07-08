import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route } from "react-router-dom";

// UI Components
import Footer from "./components/Footer"
import NavBar from "./components/Navbar";
import Create from './components/Create'
//  Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Feedback from './pages/Feedback'
import Guide from './pages/Guide'
import Picture from './pages/Picture';



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
      <Route path="/Picture">
        <Picture />
      </Route>
      
      <Route path="/create">
        <Create/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;