"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var dotenv = require("dotenv");
var dbConnect_1 = require("./database/dbConnect");
var getTasks_1 = require("./controller/getTasks");
var createTask_1 = require("./controller/createTask");
var updateTask_1 = require("./controller/updateTask");
var deleteTask_1 = require("./controller/deleteTask");
var filterTasks_1 = require("./controller/filterTasks");
var app = express();
dotenv.config({ path: "./config/config.env" });
app.use(cors({
    origin: [
        "https://main--heroic-seahorse-129213.netlify.app",
        "http://localhost:3000",
    ],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
}));
app.use(express.json());
app.use("/api/tasks", createTask_1.default);
app.use("/api/get-tasks", getTasks_1.default);
app.use("/api/update-tasks", updateTask_1.default);
app.use("/api/delete-tasks", deleteTask_1.default);
app.use("/api/filtered-tasks", filterTasks_1.default);
app.use(express.urlencoded({ extended: true }));
(0, dbConnect_1.dbConnect)();
exports.default = app;
