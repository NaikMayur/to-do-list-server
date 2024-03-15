import * as express from "express";
import Task from "../models/tasks";

const getTaskRouter = express.Router();

getTaskRouter.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default getTaskRouter;
