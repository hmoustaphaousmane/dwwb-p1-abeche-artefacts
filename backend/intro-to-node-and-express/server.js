require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");
const PORT = process.env.PORT;

let DATABASE_URI;
let NODE_ENV;

// Set database URI based on node environment
if (process.env.NODE_ENV == "test") {
  DATABASE_URI = process.env.MONGODB_TEST_URI;
  NODE_ENV = "test";
} else if (process.env.NODE_ENV == "dev") {
  DATABASE_URI = process.env.MONGODB_DEV_URI;
  NODE_ENV = "developement";
} else {
  DATABASE_URI = process.env.MONGODB_URI;
  NODE_ENV = "production";
}

// Connect to database
mongoose
  .connect(DATABASE_URI)
  .then(() => {
    console.log(`Successfully connected to ${NODE_ENV} database`);
  })
  .catch((error) => {
    console.error(error);
  });

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = server;
