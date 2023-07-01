import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";

function App() {
  // const students=["Anil", "Nevil", "Raj"]
  const students = [
    { name: "parth", email: "parth@gmail.com", mobile: 111 },
    { name: "mahesh", email: "mahesh@gmail.com", mobile: 111 },
    { name: "raj", email: "raj@gmail.com", mobile: 222 },
  ];
  return (
    <>
      <div className="App">
        <h1>Hamdle Array with List</h1>

        <table border="1">

        <tr>
              <td>name</td>
              <td>email</td>
              <td>mobile</td>

            </tr>
          {students.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>

            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
