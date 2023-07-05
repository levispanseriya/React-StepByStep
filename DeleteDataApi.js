import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState([]);
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
  getList();
  }, []);

  function getList() {
    fetch("localhost:5000//todo/{id}", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  }
  console.log(users);
  function deleteuser(id) {
    alert(id);
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
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
