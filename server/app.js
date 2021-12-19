const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const config = require("../server/config.json");
const connection = require("./db/conn");
const router = require("./router/auth");
const middleware = (req, res, next) => {
  console.log("at middleware");
  next();
};
app.use(express.json());
// connection();
app.use(require("./router/auth"));
//link to route files
// app.get("/", (req, res) => {
//   console.log("object");
//   res.send(`Hello`);
// });
// app.get("/about", middleware, (req, res) => {
//   console.log("after middleware");
//   res.send(`about`);
// });
app.get("/contact", (req, res) => {
  res.send(`contact`);
});
app.get("/login", (req, res) => {
  res.send(`login`);
});
// app.post("/signin", (req, res) => {
//   res.send(`signin`);
// });
app.listen(config.port, () => {
  console.log("listening");
});
