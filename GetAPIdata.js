import React, { useEffect, useState } from "react";
import "./App.css";
// import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Components/User";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("localhost:3005/users").then((result) => {
      result.json().then((resp) => {
        console.log("result");
      });
    });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Get API DATA</h1>
    </div>
  );
};

export default App;
