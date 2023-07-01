import "./App.css";
import react, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [intrest, setIntrest] = useState("");

  
  function getFormData(e){
    console.warn(name, tnc, intrest);
    e.preventDefault();
  }
  return (
    <div className="App">
     <h1>Handle Form in React</h1>
    <form onSubmit={getFormData}>
      <input type="text" placeholder="enter name" value={name} onChange={(e)=> setName(e.target.value)}/> <br /><br />
      <select onChange={(e)=> setIntrest(e.target.value)}>
        <option>Select Options</option>
        <option>DC</option>
        <option>Marvel</option>
      </select> <br /><br />
      <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/> <span>Accept Terms and Condition</span> <br /><br />
      <button type="submit">Submit</button>
      <button>clear</button>
    </form>
    </div>
  );
}

export default App;
