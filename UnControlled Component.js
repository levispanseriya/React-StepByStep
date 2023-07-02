import "./App.css";
import react, { useState, useMemo, useRef } from "react";
import User from "./User";

function App() {
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    console.warn("Input Field 1 Value:", inputRef.current.value);
    console.warn("Input Field 2 Value:", inputRef2.current.value);
    let input3 = document.getElementById("input3").value;
    console.warn("input3 Field 3 Value:", input3);
  }
  return (
    <div>
      <h1>UnControlled Components</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /> <br />
        <br />
        <input ref={inputRef2} type="text" />
        <br />
        <br />
        <input id="input3" typr="text" /> <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

