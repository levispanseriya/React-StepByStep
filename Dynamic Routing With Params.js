import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  const {name} = params;
  console.warn(name);
  return <div>This is {name} Page.</div>;
};

export default User;


// USer

import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  const {name} = params;
  console.warn(name);
  return <div>This is {name} Page.</div>;
};

export default User;


// Navbar

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/:name">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
