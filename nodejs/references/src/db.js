const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/references");

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("Something went wrong", error);
  });

  return mongoose.connection;
}

module.exports = { connect };
