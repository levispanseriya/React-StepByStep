// App.js

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
import Login from "./Components/Login.js";
import Protected from "./Components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Componenet={Home} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<Protected Componenet={About} />} />
          <Route path="/filter" element={<Protected Componenet={Filter} />} />
          <Route path="/contact" element={<Contact />}>
            {/* <Route path="/company" element={<Company />} />
              <Route path="/channel" element={<Channel />} />
              <Route path="/other" element={<Other />} /> */}
          </Route>
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Protected

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Componenet } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("/login");
    if (!login) {
        navigate('/login')
    } 
  });

  return (
    <div>
      <Componenet />
    </div>
  );
};

export default Protected;


// Login

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" /> <br />
      <input type="text" /> <br />
      <button onClick={login}>Login</button>
      <Outlet />
    </div>
  );
};

export default Login;
