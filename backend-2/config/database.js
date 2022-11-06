const mongoose = require("mongoose");

const MONGO_URL = "somestring";

exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("mongoDB connected"))
    .catch(error => {
      console.log(err);
      process.exit(1);
    });
};
