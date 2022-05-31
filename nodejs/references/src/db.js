const mongoose = require("mongoose");

function connect() {
  mongoose.connect(process.env.MONGO_CONNECTION);

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("Something went wrong", error);
  });

  return mongoose.connection;
}

module.exports = { connect };
