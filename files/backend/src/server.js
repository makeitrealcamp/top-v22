require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formData = require("./utils/formData");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/profile", formData, (req, res) => {
  console.log(req.body);
  console.log("profile");
  res.status(200).send({ ...req.body });
});

app.listen(port, () => {
  console.log(`App runnning at http://localhost:${port}`);
});
