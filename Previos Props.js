import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./Components/User";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Previous Props </h1>
      <User count={count}/>
      <button onClick={() => setCount(Math.floor(Math.random()*10 ))}>Update Props</button>
    </div>
  );
};

export default App;


// USer

import React, { useEffect, useRef } from "react";

const User = (props) => {
  const lastVal = useRef();

  useEffect(() => {
    lastVal.current = props.count;
  });

  const previosProps = lastVal.current;
  console.log(previosProps);
  return (
    <div>
      <h1>Current Props  : {props.count}</h1>
      <h1>Previos Props  : {previosProps}</h1>

    </div>
  );
};

export default User;
