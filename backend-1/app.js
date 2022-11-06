const express = require("express");
const User = require("./model/user");
const app = express();

app.get("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!(email && password && firstname && lastname)) {
    res.status(400).send("All the fields are required");
  }
  const existingUser = await User.findOne(email);
  if (existingUser) {
    res.status(400).send("User already exists");
  }
});

app.post("/", (req, res) => {
  res.send("<h1>HomePage</h1> ");
});

module.exports = app;
