import mongoose from "mongoose";
import taskStatus from "../enums/TaskStatus.js";
const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      enum: taskStatus.map((status) => status.value),
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },
  { timestamps: true }
);

const Task = new mongoose.model("task", TaskSchema);

export default Task;
