require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routes/user");
const { connect } = require("./db");
const { transporter, verify } = require("./utils/mailer");

const port = process.env.PORT || 8080;
const app = express();
connect();
verify(transporter);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost${port}`);
});
