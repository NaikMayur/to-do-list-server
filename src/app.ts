import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./database/dbConnect";
import getTaskRouter from "./controller/getTasks";
import createTask from "./controller/createTask";
import updateTaskRouter from "./controller/updateTask";
import deleteRouter from "./controller/deleteTask";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL!],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/tasks", createTask);
app.use("/api/get-tasks", getTaskRouter);
app.use("/api/update-tasks", updateTaskRouter);
app.use("/api/delete-tasks", deleteRouter);
app.use(express.urlencoded({ extended: true }));
dbConnect();

export default app;
