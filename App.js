import "./App.css";
import react, { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      {status ? <h1>Hello World!</h1> : null}
      {/* <button onClick={() => setStatus(false)}>Hidden</button>
      <button onClick={() => setStatus(true)}>Show</button> */}

      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
 
