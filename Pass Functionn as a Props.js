import "./App.css";
import react, { useState } from "react";
import User from "./User";
import Member from "./Member"

function App() {
  function getData() {
    alert("Hello Data")
  }

  return (
    <div className="App">
      <User data={getData}  />
      <div style={{float:"right"}}>
      <Member data={getData}  />

      </div>
    </div>
  );
}

export default App;

// USER.js
import React from 'react'

const User = (props) => {

  return (
    <>
    <div>User Components</div>
    <button onClick={props.data}>Get Data</button>
    </>
  )
}

export default User

// Member.js


import React from 'react'

const Member = (props) => {
  return (
    <>
    <div>Member Components</div>
    <button onClick={props.data}>Get Data</button>
    </>
  )
}

export default Member
