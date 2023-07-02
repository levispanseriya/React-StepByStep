import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";
import Cols from "./cols";
import { Table } from "react-bootstrap";

function App() {

  function parentAlert(p){
    alert(p)
  }

  return (
    <div>
      <h1>Lifing State Up</h1>
      <User alert={parentAlert}/>
    </div>
  );
}

export default App;


// User.js

import React from "react";

const User = (props) => {
  
  let data ="Hello I am From Child Componenet."

  return (
    <div>
      <h2>User Components</h2>
      <p>Hello</p>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  );
};

export default User;
