import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connect } from "./db";
import userRouter from "./routes";

dotenv.config();
const port = 8080;
const app = express();
connect();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server OK");
});
