"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var tasksSchema = new mongoose_1.default.Schema({
    status: { type: String },
    title: { type: String },
    description: { type: String },
}, { collection: "tasks" });
var Task = mongoose_1.default.model("tasks", tasksSchema);
exports.default = Task;
