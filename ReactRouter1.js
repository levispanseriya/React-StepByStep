import "./App.css";
import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



/// Home

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <p>This is Home page</p>
      <p>we are learning React Js.</p>
      <Link to="/about">Go to About Page</Link>
    </>
  );
};

export default Home;



//About
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About</div>
      <p>This is Home page</p>
      <p>we are learning React Js.</p>
      <Link to="/">Go to </Link>
    </>
  );
};

export default About;
