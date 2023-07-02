import "./App.css";
import react, { useState, useMemo, useRef } from "react";
import User from "./User";

function App() {
  const [val, setVal] = useState("");
  const [item, setItem] = useState("");

  return (
    <div>
      <h1>Controlled Components</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {
        <>
          <h3>{val}</h3>
          <h3>{item}</h3>
        </>
      }
    </div>
  );
}

export default App;
