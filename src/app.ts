import express = require("express");
import cors = require("cors");
import * as dotenv from "dotenv";
import { dbConnect } from "./database/dbConnect";
import getTaskRouter from "./controller/getTasks";
import createTaskRouter from "./controller/createTask";
import updateTaskRouter from "./controller/updateTask";
import deleteTaskRouter from "./controller/deleteTask";
import filterTasksRouter from "./controller/filterTasks";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [
      "https://main--heroic-seahorse-129213.netlify.app",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/tasks", createTaskRouter);
app.use("/api/get-tasks", getTaskRouter);
app.use("/api/update-tasks", updateTaskRouter);
app.use("/api/delete-tasks", deleteTaskRouter);
app.use("/api/filtered-tasks", filterTasksRouter);
app.use(express.urlencoded({ extended: true }));
dbConnect();

export default app;
