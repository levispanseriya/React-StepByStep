import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";
import Cols from "./cols";
import { Table } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


// Cols

import React from "react";

const cols = () => {
  return (
    <>
      <tr>
        <td>Anil</td>
        <td>Mukesh</td>
      </tr>
    </>
  );
};

export default cols;
