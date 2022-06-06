import mongoose from "mongoose";

export let connection: mongoose.Connection;

export async function connect(): Promise<void> {
  if (connection) return;

  const mongoURI = "mongodb://localhost:27017/tasks";

  await mongoose.connect(mongoURI);

  connection = mongoose.connection;

  connection.once("open", () => {
    console.log("Connection mongoDB is OK");
  });
}

export async function disconnect(): Promise<void> {
  if (!connection) return;

  await mongoose.disconnect();
}
