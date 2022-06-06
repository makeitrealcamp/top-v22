const express = require("express");
const SocketIO = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("new connection");

  socket.emit("welcome", { message: "hola mundo" });

  socket.on("message", (data) => {
    //io.emit("broadcast")
    //Message.create(data)
    io.emit("broadcast", "Hay un nuevo usuario diciendo Hola");
    io.to("some room").emit("private", "Hola esta es una sala privada");
  });

  socket.on("join room", () => {
    console.log("new user in room");
    socket.join("some room");
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

server.listen(8000, () => console.log("Server running"));
