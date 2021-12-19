import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (data.status === 400 || !data) {
      alert("login unsuccessfull");
    } else {
      alert("sucessfull login");
      history.push("/");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form method="POST">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </form>
      <button type="submit" onClick={loginuser}>
        SignIn
      </button>
      <NavLink to="/register">
        <button>Not Registered! Create an Account</button>
      </NavLink>
    </div>
  );
};
export default Login;
