import "./App.css";
import react, { useState, useMemo } from "react";
import User from "./User";
import Cols from "./cols";
import { Table } from "react-bootstrap";

function App() {

    const [count , setCount] = useState(0)
    const [item , setItem] = useState(1)

    const multiCountMemo = useMemo(function multiCount() {
      console.log("multiCount");
      return count*5
    },[count])
  return (
    <div>
      <h1>UseMemo Hook in Memo</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}

export default App;
