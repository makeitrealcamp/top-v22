const express = require("express");
const uuid = require("uuid-random");

const app = express();
const port = 8000;

app.use(express.json()); //Linea que se explica más adelante

let toDo = []; // Variable para almacenar

//CRUD
// Create - Read - Update - Delete
// POST - GET - PUT - DELETE

// GET /tasks
// GET /tasks/:taskId
// POST /tasks
// PUT /tasks/:taskId
// DELETE /tasks/:taskId

// GET
app.get("/tasks", (req, res) => {
  res.status(200).json(toDo);
});

// GET:id
app.get("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;

  const task = toDo.filter((item) => taskId === item.id)[0];

  //if(!task)
  if (task === undefined) {
    res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

// POST
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: uuid(),
    title,
    done: false,
  };

  toDo.push(newTask);

  res.status(201).json(newTask);
});

//PUT
app.put("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;

  let updateTask;
  toDo = toDo.map((item) => {
    if (item.id !== taskId) {
      return item;
    }

    updateTask = {
      ...item,
      done: !item.done,
    };

    return updateTask;
  });

  res.status(200).json(updateTask);
});

//DELETE
app.delete("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;

  toDo = toDo.filter((item) => item.id !== taskId);

  res.status(200).json({ message: "OK" });
});

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`);
});
