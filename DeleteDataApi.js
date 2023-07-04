import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("localhost:5000/5000/todo/{id}", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  }

  return (
    <div className="App">
      <h1>DELETE API DATA</h1>
    </div>
  );
};

export default App;

