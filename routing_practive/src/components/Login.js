import React from "react";
import { Link, navigate } from "@reach/router";

const Login = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate("/route-two");
  };
  return (
    <div>
      <h1>Please login</h1>
      <Link to="/route-two">Dashboard</Link>
      <button onClick={onClickHandler}>Dashboard 2</button>
    </div>
  );
};

export default Login;
