// About

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About</div>
      <p>This is Home page</p>
      <p>we are learning React Js.</p>
      <Link to="/">Go to Home Page</Link>
      <li>
        <Link to="/user/anil" state={{ name: "anil patel" }}>
          Anil
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/user/peter">Peter</Link>
      </li>
      <li>
        <Link to="/user/bruce">Bruce</Link>
      </li>
    </>
  );
};

export default About;

//  User

import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const {name} = params;
  console.warn(name);
  return <div>This is {name} Page.</div>;
};

export default User;
