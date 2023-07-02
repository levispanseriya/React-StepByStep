import "./App.css";
import react from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Page404 from "./Components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Home

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

// About import React from "react";
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


// 404

import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div>Page404</div>
      <Link to="/">Go to Home Page </Link>
    </>
  );
};

export default Page404;
