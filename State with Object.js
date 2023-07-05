import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./Components/User";

const App = () => {
  const [data, setData] = useState({ name: "anil", age: 35 });

  return (
    <div className="App">
      <h1>State Object With Hooks</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => {
          setData({...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter age"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />

      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
};

export default App;
