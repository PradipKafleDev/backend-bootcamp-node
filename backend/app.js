const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello frinedsss");
});
app.get("/insta", (req, res) => {
  const insta = {
    userName: "Pradip",
    address: "Australia",
  };
  res.status(200).json({ twitter });
});
app.get("/api/twitter", (req, res) => {
  const twitter = {
    usename: "Aman@gmail.com",
    pasword: "12345",
  };
  res.status(200).json({ twitter });
});
app.get("/api/v1/:token", (req, res) => {
  console.log("ans" + req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(3000, () => {
  console.log("server is running");
});
