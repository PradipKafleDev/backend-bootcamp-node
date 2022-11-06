//always start the applicaiton with connecting database
require("./config/database").connect();
//import everything that we have install in jsson file
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//import model-User

const User = require("./model/user");

const app = require("express");
app.use(express.json()); //here use is middleware
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("<h1>Hello Auth system</h1>");
});
app.post("/register", async (req, res) => {
  try {
    //collect all information
    const { firstname, lastname, email, password } = req.body;
    //validate the data, if exists
    if (!(email && password && lastname && firstname)) {
      res.status(401).send("All fields are required");
    }
    //=== Check if email is in correct format ==

    //check if user exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already found in database");
    }
    //encrypt the password

    const myEncriptPassword = await bcrypt.hash(password, 10);

    //create a newUser entry in database-(database always in another contenent)
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: myEncriptPassword,
    });
    // Create a token and send it
    const token = jwt.sign(
      {
        //this is a payload or data we generally pass payload
        id: user._id,
        email: email,
      },
      "shhhhh",
      { expiresIn: "2h" }
    );
    user.token = token;
    //don't want to send the password we can make in null aswell
    user.password = undefined;
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    console.log("Error in response route");
  }
});
app.post("/login", async (req, res) => {
  try {
    // collect information from frontend
    const { email, password } = req.body;
    //Validate
    if (!(email && password)) {
      res.status(401).send("email and password is required");
    }

    //check user in database

    const user = await User.findOne({ email: email });

    //===if user doesnot exist== assignment

    //match the password NOte:: collest way to compare passowrd
    if (user && (await bcrypt.compare(password, user.password))) {
      //creake token
      const token = jwt.sign({ id: user_id, email }, "shhhh", {
        expiresIn: "2h",
      });
      user.password = undefined;
      user.token = token;

      //creating cookies and sending
      const option = {
        expires: new Date(Date.now() + 3 /*year*/ * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, option).json({
        success: true,
        token,
        user,
      });
    }
    res.send(400).send("email or password is incorrect");
  } catch (error) {
    console.log(error);
  }
});
