const mongoose = require("mongoose");

function connect() {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/testop";

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connection with mongo OK");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Something went wrong!", err);
  });

  return mongoose.connection;
}

module.exports = { connect };
