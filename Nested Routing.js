import "./App.css";
import react from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Filter from "./Components/Filter";
import Contact from "./Components/ContactUs";
import Company from "./Components/Company";
import Other from "./Components/Other";
import Channel from "./Components/Channel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="/company" element={<Company />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/other" element={<Other />} />
          </Route>
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ContactUs

import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <h2>Here We have some other Bussiness</h2>
      <Link to="company">Company</Link>
      <br />
      <Link to="channel">Channel</Link>
      <br />
      <Link to="other">Other</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default ContactUs;

// Company

import React from 'react'

const Company = () => {
  return (
    <div>Company</div>
  )
}

export default Company

// Other

import React from 'react'

const Other = () => {
  return (
    <div>Other</div>
  )
}

export default Other
