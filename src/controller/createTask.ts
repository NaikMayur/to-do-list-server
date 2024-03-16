import * as express from "express";
import Task from "../models/tasks";

const createTask = express.Router();

createTask.post("/", async (req, res) => {
  try {
    const { status, title, description } = req.body;
    const newTask = new Task({ status, title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default createTask;
