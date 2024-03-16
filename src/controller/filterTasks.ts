import * as express from "express";
import Task from "../models/tasks";

const filterTasksRouter = express.Router();

filterTasksRouter.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    let tasks;
    if (status === "All") {
      tasks = await Task.find();
    } else {
      tasks = await Task.find({ status });
    }
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default filterTasksRouter;
