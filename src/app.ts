import express = require("express");
import cors = require("cors");
import * as dotenv from "dotenv";
import { dbConnect } from "./database/dbConnect";
import getTaskRouter from "./controller/getTasks";
import createTaskRouter from "./controller/createTask"; // Changed variable name
import updateTaskRouter from "./controller/updateTask";
import deleteTaskRouter from "./controller/deleteTask"; // Changed variable name

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL || process.env.PRODUCTION_URL,
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/tasks", createTaskRouter); // Updated variable name
app.use("/api/get-tasks", getTaskRouter);
app.use("/api/update-tasks", updateTaskRouter);
app.use("/api/delete-tasks", deleteTaskRouter); // Updated variable name
app.use(express.urlencoded({ extended: true }));
dbConnect();

export default app;
