import mongoose from "mongoose";

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
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = new mongoose.model("task", TaskSchema);

export default Task;
