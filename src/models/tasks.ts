import mongoose from "mongoose";
const tasksSchema = new mongoose.Schema(
  {
    status: { type: String },
    title: { type: String },
    description: { type: String },
  },
  { collection: "tasks" }
);
const Task = mongoose.model("tasks", tasksSchema);
export default Task;
