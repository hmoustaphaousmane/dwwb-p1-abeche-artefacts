require("dotenv").config();
const express = require("express");

const studentRouter = require("./routers/studentRouter");
const userRouter = require("./routers/userRouter");

const app = express();

// Middleware to handle any json payload data sent from a client
app.use(express.json());

// app.get("/test", authMiddleware,
//   (req, res) => {
//     // console.log("Controller request::", req.decoded);
//     res.send({message: "message"});
//   }
// )

app.get("/hello", (req, res) => {
  // res..salut = "salut";
  req.headers.bonjour = "bonjour";

  console.log(req.headers);

  res.send("Bonjour, le Monde!");
});

// Routes
app.use("/students", studentRouter);
app.use("/auth", userRouter);


module.exports = app;
