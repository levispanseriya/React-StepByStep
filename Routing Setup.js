import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/home">Home Page</Link> <br />
        <br />
        <Link to="/about">About Page</Link>
        <Routes>
          <Route path="/home" element=<Home />></Route>
          <Route path="/about" element=<About />></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <p>This is Home Page of Website.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Component</h1>
      <p>This is About Page of Website.</p>
    </div>
  );
};
