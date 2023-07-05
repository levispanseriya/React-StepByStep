import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [id, setId] = useState(null)

  let users = [
    { userId: 1, name: "raj", email: "raj@gmail.com", mobile: "9658745632" },
    {
      userId: 2,
      name: "nevil",
      email: "nevil@gmail.com",
      mobile: "2563548575",
    },
    {
      userId: 3,
      name: "parth",
      email: "parth@gmail.com",
      mobile: "9856325475",
    },
    { userId: 4, name: "mit", email: "mit@gmail.com", mobile: "8569752423" },
  ];
  useEffect(() => {
    // getList();
  }, []);

  function getList() {
    fetch("localhost:5000//todo/{id}", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        // console.log("resp", resp);
        setUser(resp);
        setName(resp[0].name);
        setName(resp[0].email);
        setName(resp[0].mobile);
      });
    });
  }
  console.log(users);
  function deleteuser(id) {
    // alert(id);
  }

  function selectUser(id) {
    console.warn(users[id - 1]);
    setName(users[id - 1].name);
    setEmail(users[id - 1].email);
    setMobile(users[id - 1].mobile);
    setId(users.id)
  }

  function updateUser() {
    console.log(name,email,mobile,users.id);
  }

  return (
    <div className="App">
      <h1>DELETE API DATA</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>Mobile</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={deleteuser(item.id)}>DELETE</button>
                <button onClick={selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
};

export default App;
