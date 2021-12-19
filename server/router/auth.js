const express = require("express");
const router = express.Router();
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../authentication/authentication");
require("../db/conn");
const User = require("../model/schema");
router.get("/", (req, res) => {
  res.send(`Hello from router`);
});
//register
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "error" });
  }
  //to find user exist or not
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password don't match" });
    }
    const new_user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });
    await new_user.save();
    res.status(201).json({ msg: "registered" });
  } catch (err) {
    console.log(err);
  }
  //left email = db data
  //right email = filled by user in form
});

//login
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "yeahhh!" });
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: "Please fill all the details" });
    }
    //reading data from mongodb
    const userlogin = await User.findOne({ email: email });
    // console.log(userlogin);
    if (userlogin) {
      const match = await bcrpyt.compare(password, userlogin.password);
      const token = await userlogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!match) {
        res.status(400).json({ error: "credentials error" });
      } else {
        res.status(200).json({ msg: "Signin successfully" });
      }
    } else {
      res.status(400).json({ error: "credentials error" });
    }

    // const
  } catch (err) {
    console.log(err);
  }
});
router.get("/about", authenticate, (req, res) => {
  console.log("after middleware");
  res.send(`about`);
});
module.exports = router;
