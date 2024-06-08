import express from "express";
import { faker } from "@faker-js/faker";

import {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} from "../controllers/Users.js";

const router = express.Router();

router.get("/GetAll", async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    const err = new Error(error);
    err.status = 500;
    return next(err);
  }
});

router.get("/GetOne/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await getOneUser(userId);
    res.status(200).json(user);
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
});

router.post("/Add", async (req, res, next) => {
  const userBody = req.body;
  // const isDuplicate =

  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
});

router.put("/update", async (req, res, next) => {
  try {
    const updatedUser = await updateUser(req.body);
    res.status(200).json(updateUser);
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await deleteUser(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
});
export default router;
