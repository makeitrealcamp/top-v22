const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user");
const postRouter = require("./src/routes/review");
require("dotenv").config();

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/reviews", postRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
