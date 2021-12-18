import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
