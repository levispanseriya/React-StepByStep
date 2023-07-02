import "./App.css";
import react, { useState, useMemo , useRef} from "react";
import User from "./User";
import Cols from "./cols";
import { Table } from "react-bootstrap";

function App() {

  let inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value="1000";
    inputRef.current.style.color="red";
    inputRef.current.focus();


  }
  return (
    <div>
      <h1>forwardRef Hook in React</h1>
      <User ref={inputRef}/>
      <button onClick={updateInput}>Update Input Box</button>
    </div>
  );
}

export default App;

// User

import React, { forwardRef } from "react";

const User = (props, ref) => {
  return (
    <div>
      <h2>User Components</h2>
      <input type="text" ref={ref}/>
    </div>
  );
};

export default forwardRef(User);
