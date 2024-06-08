import express from "express";

import {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";

const router = express.Router();

router.get("/GetAll", getAllUsers);

router.post("/Add", createUser);

router.get("/GetOne/:id", getOneUser);

router.put("/update", updateUser);

router.delete("/delete/:id", deleteUser);
export default router;
