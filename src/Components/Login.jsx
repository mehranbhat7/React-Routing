import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <label>Username:</label>
          <br />
          <input type="text" placeholder="Enter Username" />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input type="password" placeholder="Enter password" />
          <br />
          <br />
          <br />
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
