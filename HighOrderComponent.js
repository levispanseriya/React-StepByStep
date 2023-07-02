import "./App.css";
import react, { useState, useMemo, useRef } from "react";
import User from "./User";

function App() {
  return (
    <div>
      <h1>High Order Component</h1>
      <HOCRED cmp={Counter} />
      <HOCGREEN cmp={Counter} />
      <HOCBLUE cmp={Counter} />
    </div>
  );
}

function HOCRED(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 200 }}>{<props.cmp />}</h2>
  );
}

function HOCGREEN(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 200 }}>{<props.cmp />}</h2>
  );
}

function HOCBLUE(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 200 }}>{<props.cmp />}</h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;
