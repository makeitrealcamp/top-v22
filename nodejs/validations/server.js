const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user");

const port = 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());

//endpoints
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
