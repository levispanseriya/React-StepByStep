import "./App.css";
import react, { useState, useMemo , useRef} from "react";
import User from "./User";
import Cols from "./cols";
import { Table } from "react-bootstrap";

function App() {

  let inputRef = useRef(null)

  function handleInput() {
    console.warn("Function Call");
    // inputRef.current.value="100";
    // inputRef.current.focus();
    // inputRef.current.style.color="red"
    inputRef.current.style.display="none"
  }
  return (
    <div>
      <h1>useRef Hook in React</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInput}>Click Me</button>
    </div>
  );
}

export default App;
