import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="text" name="email"></input>
        <br />
        <label>Password</label>
        <input type="password" name="password"></input>
      </form>
      <button type="submit">SignIn</button>
      <NavLink to="/register">
        <button>Not Registered! Create an Account</button>
      </NavLink>
    </div>
  );
};
export default Login;
