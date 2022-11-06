const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser,
      UseUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .error(err => console.log(err));
};
