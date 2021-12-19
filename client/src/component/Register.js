import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
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
    console.log();
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      alert("Successfull Registration");
      console.log("Successfull Registration");
      history.push("/login");
    }
  };

  return (
    <div>
      <form method="POST">
        <label>Name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={user.name}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="name"
        ></input>
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={user.email}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="email"
        ></input>
        <br />
        <label>Phone</label>
        <input
          type="mobile"
          name="phone"
          autoComplete="off"
          value={user.phone}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="phone"
        ></input>
        <br />
        <label>Work</label>
        <input
          type="text"
          name="work"
          autoComplete="off"
          value={user.work}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="work"
        ></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={user.password}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="password"
        ></input>
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          autoComplete="off"
          value={user.cpassword}
          onChange={(e) => {
            reg(e);
          }}
          placeholder="confirm password"
        ></input>
        <br />
      </form>
      <button type="submit" onClick={submit}>
        Register
      </button>
      <NavLink to="/login">
        <button>Already have an Account!</button>
      </NavLink>
    </div>
  );
};

export default Register;
