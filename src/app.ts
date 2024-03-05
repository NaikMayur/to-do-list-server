import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./database/dbConnect";
const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL!],
    credentials: true,
    methods: ["POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
export default app;
