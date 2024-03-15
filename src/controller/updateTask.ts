import * as express from "express";
import Task from "../models/tasks";

const updateTaskRouter = express.Router();
updateTaskRouter.put("/:taskId", async (req, res) => {
  const { taskId } = req.params;

  const { title, description, status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default updateTaskRouter;
