import "./App.css";
import react, { useState } from "react";
import Login from "./Login";

function App() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);


  function loginHandle(e) {
    if( user.length < 3 || password.length < 3 ) {
      alert("type corret Values")
    } else {
      alert("all good")
    }
    e.preventDefault();
  }

  function userHandler(e) {
    
    let item = e.target.value;
    if(item.length < 3) {
      setUserErr(true)
    } else {
      setUserErr(false)
    }

    setUser(item);
  }


  function passHandler(e) {
    
    let item = e.target.value;
    if(item.length < 3) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    setPassword(item)
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
      <input text="type" placeholder="Enter UserID" onChange={userHandler}/> <br />{userErr?<span>User Not Valid</span>:""}
      <br />
      <input text="text" placeholder="Enter Password" onChange={passHandler} />{passwordErr?<span>Password Not Valid</span>:""}
      <br />
      <br />
      <button type="submit">Login</button> 
      </form>
      <Login />
    </div>
  );
}

export default App;
