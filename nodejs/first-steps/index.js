//module.exports = Create
//const Create = require("./path/to/file")

// que es una API ( Aplication Programming Interfaces  )?
//Biblioteca de funcionalidades para extender el comportamiento de nuestra aplicación
const express = require("express");

const port = 8000;
const app = express();

app.use(express.json());

//Endpoint GET para escuchar
//1--La ruta
//2--Callback
//--1--La petición
//--2--Objeto que representa la respuesta

app.get("/home", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/students", (req, res) => {
  res.status(205).json([
    { name: "Anderson", city: "Bogotá", age: 31 },
    { name: "Valenina", city: "Cali", age: 23 },
  ]);
});

//CRUD
// Crate - Read - Update - Delete

//Abrir un puerto
//1--Número del puerto
//2--Callback se ejecuta cuando el puerto corre OK
app.listen(port, () => {
  console.log("Successfully running at http://localhost:8000");
});
