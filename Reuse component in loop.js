import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";
import { Table } from "react-bootstrap";

function App() {
  // const students=["Anil", "Nevil", "Raj"]
  const users = [
    {
      name: "parth",
      email: "parth@gmail.com",
      contact: 984791516,
    },
    {
      name: "mahesh",
      email: "mahesh@gmail.com",
      contact: 678676786,
    },
    {
      name: "raj",
      email: "raj@gmail.com",
      contact: 8785678678,
    },
    {
      name: "neel",
      email: "neel@gmail.com",
      contact: 256868,
    },
  ];
  return (
    <>
      <div className="App">
        <h1>Reuse Component with List</h1>
        {
          users.map((item, i) => 
          <User data={item} key={i} />

          )
        }
      </div>
    </>
  );
}

export default App;



// USER
import React from 'react'

const User = (props) => {
  return (
    <div>
    <span>{props.data.name}</span> 
    <span>{props.data.email}</span>
    <button>Hello </button>

    </div>
  )
}

export default User;
