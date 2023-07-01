import "./App.css";
import react, { useState, useEffect } from "react";
import User from "./User";

function App() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  return (
    <div className="App">
      
      <User count={count} data={data} />

      <button onClick={() => setCount(count + 1)}>Upate Counter</button>
      <button onClick={() => setData(data + 1)}>Upate Data</button>
    </div>
  );
}

export default App;

// USER

import "./App.css";
import React, { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  useEffect(() => {
    alert("Count is :" + props.count);
  }, [props.count, props.data]);

  return (
    <div className="App">
      <h1>Count Props : {props.count}</h1>
      <h1>data Props: {props.data}</h1>
    </div>
  );
}

export default App;
