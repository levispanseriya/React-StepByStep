import React, { useEffect, useState } from "react";
import "./App.css";
// import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Components/User";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  function saveUser(){
    console.log({name, email, mobile});
  }
  let data = {name, email, mobile};


  fetch("localhost:5000/5000/todo",{
    method:"POST",
    headers:{
      'Accept':'application/json'
    },
    body: JSON.stringify(data)
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log("resp", resp);
    })
  })

  return (
    <div className="App">
      <h1>Get API POST DATA</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        name="mobile"
      />
      <button onClick={saveUser}>Save the User</button>
      <br />
    </div>
  );
};

export default App;
