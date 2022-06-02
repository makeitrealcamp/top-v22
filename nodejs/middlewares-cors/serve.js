const express = require("express");
const cors = require("cors");

//CORS - Cross Origin Resources Sharing
//-- Es un documento que nos dice como tenemos que compartir recursos http de un sitio a otro

const port = 8080;
const app = express();

const logger = (req, res, next) => {
  console.log("hola mundo", req.method, req.path);
  next();
};

app.use(
  cors({
    origin: "*",
    methods: "OPTIONS, GET",
    optionsSuccessStatus: 204,
  })
);
app.use("/about", logger);
app.use(express.json());

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("created");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
