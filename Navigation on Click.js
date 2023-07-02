// Home.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navToPage = () => {
    let x = false;
    if (x) {
      navigate("/about");
    } else {
    navigate('/filter')

    }
  };
  return (
    <>
      <div>Home</div>
      <p>This is Home page</p>
      <p>we are learning React Router Here.</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      <button onClick={() => navToPage()}>Go To About Page</button>
      <br />
      <button onClick={() => navToPage()}>Go To Filter Page</button>
    </>
  );
};

export default Home;
