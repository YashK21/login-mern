const mongoose = require("mongoose");
const bcrpyt = require("bcryptjs");
const config = require("../config.json");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
//hashing
userSchema.pre("save", async function (next) {
  console.log("from hash");
  if (this.isModified("password")) {
    this.password = await bcrpyt.hash(this.password, 7);
    this.cpassword = await bcrpyt.hash(this.cpassword, 7);
  }
  next();
});
//token gen
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokengen = jwt.sign({ _id: this._id }, config.key);
    this.tokens = this.tokens.concat({ token: tokengen });
    await this.save();
    return tokengen;
  } catch (err) {
    console.log(err);
  }
};
//model
const User = mongoose.model("USER", userSchema);
module.exports = User;
