import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);

  function updateCounter() {
    for (let i = 0; i < 5; i++) {
      setCount((pre) => {
        return pre + 1;
      });
    }
  }
  return (
    <div className="App">
      <h1>Previous State {count}</h1>
      <button onClick={updateCounter}>Click Me to Update State</button>
    </div>
  );
};

export default App;
