import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const reg = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={user.name}
          onChange={reg}
          placeholder="name"
        ></input>
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={user.email}
          onChange={reg}
          placeholder="email"
        ></input>
        <br />
        <label>Phone</label>
        <input
          type="mobile"
          name="phone"
          autoComplete="off"
          value={user.phone}
          onChange={reg}
          placeholder="phone"
        ></input>
        <br />
        <label>Work</label>
        <input
          type="text"
          name="work"
          autoComplete="off"
          value={user.work}
          onChange={reg}
          placeholder="work"
        ></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={user.password}
          onChange={reg}
          placeholder="password"
        ></input>
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          autoComplete="off"
          value={user.cpassword}
          onChange={reg}
          placeholder="confirm password"
        ></input>
        <br />
      </form>
      <button type="submit">Register</button>
      <NavLink to="/login">
        <button>Already have an Account!</button>
      </NavLink>
    </div>
  );
};

export default Register;
