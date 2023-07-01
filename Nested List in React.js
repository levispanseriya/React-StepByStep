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
      address: [
        { roomNo: "15", city: "delhi", pincode: "245672" },
        { roomNo: "25", city: "ahmdabad", pincode: "256854" },
        { roomNo: "588", city: "pune", pincode: "125754" },
        { roomNo: "25", city: "surat", pincode: "8565747" },
      ],
    },
    {
      name: "mahesh",
      email: "mahesh@gmail.com",
      address: [
        { roomNo: "15", city: "delhi", pincode: "245672" },
        { roomNo: "25", city: "ahmdabad", pincode: "256854" },
        { roomNo: "588", city: "pune", pincode: "125754" },
        { roomNo: "25", city: "surat", pincode: "8565747" },
      ],
    },
    {
      name: "raj",
      email: "raj@gmail.com",
      address: [
        { roomNo: "15", city: "delhi", pincode: "245672" },
        { roomNo: "25", city: "ahmdabad", pincode: "256854" },
        { roomNo: "588", city: "pune", pincode: "125754" },
        { roomNo: "25", city: "surat", pincode: "8565747" },
      ],
    },
    {
      name: "neel",
      email: "neel@gmail.com",
      address: [
        { roomNo: "15", city: "delhi", pincode: "245672" },
        { roomNo: "25", city: "ahmdabad", pincode: "256854" },
        { roomNo: "588", city: "pune", pincode: "125754" },
        { roomNo: "25", city: "surat", pincode: "8565747" },
      ],
    },
  ];
  return (
    <>
      <div className="App">
        <h1>Handle Array with List</h1>
        <Table variant="dark" striped>
          <tr>
            <tbody>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
            </tbody>
            {
              users.map((item,i)=>
              <tr key={i}>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
              <Table Table variant="dark" striped>
              <tbody>
              {
                item.address.map((a)=>
                  <tr key={i}>
                      <td>{a.roomNo}</td>
                      <td>{a.city}</td>
                      <td>{a.pincode}</td>
                  </tr>
                )
              }
              </tbody>
              </Table>
              </td>
              </tr>
              )
            }
          </tr>          
        </Table>
      </div>
    </>
  );
}

export default App;
