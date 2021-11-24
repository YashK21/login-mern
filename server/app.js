const express = require("express");
// const mongoose = require("mongoose");
const config = require("../server/config.json");
const connection = require("./db/conn");
const middleware = (req, res, next) => {
  console.log("at middleware");
  next();
};
const app = express();
// connection();

app.get("/", (req, res) => {
  console.log("object");
  res.send(`Hello`);
});
app.get("/about", middleware, (req, res) => {
  console.log("after middleware");
  res.send(`about`);
});
app.get("/contact", (req, res) => {
  res.send(`contact`);
});
app.get("/login", (req, res) => {
  res.send(`login`);
});
app.get("/signin", (req, res) => {
  res.send(`signin`);
});
app.listen(config.port, () => {
  console.log("listening");
});
