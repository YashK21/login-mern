const jwt = require("jsonwebtoken");
const User = require("../model/schema");
const config = require("../config.json");
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, config.key);
    const rootuser = await User.findOne({
      _id: verifytoken._id,
      "tokens.token": token,
    });
    if (!rootuser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootuser = rootuser;
    req.userid = rootuser._id;
    next();
  } catch (err) {
    res.status(401).send("unauthorized : no token generated");
    console.log(err);
  }
};
module.exports = authenticate;
