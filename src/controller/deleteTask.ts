import express, { Request, Response } from "express";
import Task from "../models/tasks";

const deleteRouter = express.Router();

deleteRouter.delete("/:taskId", async (req: Request, res: Response) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default deleteRouter;
