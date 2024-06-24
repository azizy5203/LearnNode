import express from "express";

import {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
  getStatusList,
} from "../controllers/Tasks.js";

const router = express.Router();

router.get("/GetAll", getAllTasks);

router.post("/Add", createTask);

router.get("/GetOne/:id", getOneTask);

router.put("/update", updateTask);

router.delete("/delete/:id", deleteTask);

router.get("/GetStatusList", getStatusList);

export default router;
