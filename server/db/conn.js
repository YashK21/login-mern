const mongoose = require("mongoose");
const config = require("../config.json");
//mongoose connection
//dbname,cb fun(optional)
mongoose
  .connect(config.db)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
