import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404(page not found) </h1>
      <NavLink to="/home">Home Page</NavLink>
    </div>
  );
};

export default Error;
