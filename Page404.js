import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Page404 from "./Components/Page404";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element=<Home />></Route>
        <Route path="/about" element=<About />></Route>
        <Route path="*" element=<Page404 />></Route>
      </Routes>
    </div>
  );
};

export default App;

    
import React from "react";

const Page404 = () => {
  return (
    <>
      <div>404</div>
      <p>This Page Not Found.</p>
    </>
  );
};

export default Page404;
