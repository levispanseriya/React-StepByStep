import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";
import { Table } from "react-bootstrap";

function App() {
  // const students=["Anil", "Nevil", "Raj"]
  const students = [
    { name: "parth", email: "parth@gmail.com", mobile: 111 },
    { name: "mahesh", email: "mahesh@gmail.com", mobile: 222 },
    { name: "raj", email: "raj@gmail.com", mobile: 323 },
    { name: "neel", email: "neel@gmail.com", mobile: 222 },
  ];
  return (
    <>
      <div className="App">
        <h1>Handle Array with List</h1>

        <Table border="1">
          <tbody>
            <tr>
              <td>name</td>
              <td>email</td>
              <td>mobile</td>
            </tr>
            {students.map((data, index) => (
              data.mobile=="222" ?
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
              </tr> : null
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
