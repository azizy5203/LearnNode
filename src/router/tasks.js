import express from "express";

import {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
} from "../controllers/Tasks.js";

const router = express.Router();

router.get("/GetAll", getAllTasks);

router.post("/Add", createTask);

router.get("/GetOne/:id", getOneTask);

router.put("/update", updateTask);

router.delete("/delete/:id", deleteTask);
export default router;
