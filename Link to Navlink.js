import "./App.css";
import react from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// NAVBAR
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink className="navbarlink" style={{color:"red"}} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

