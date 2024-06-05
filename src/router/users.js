import express from "express";
import { faker } from "@faker-js/faker";

import { createUser } from "../controllers/Users.js";

const router = express.Router();

const usersList = Array.from({ length: 10 }, () => {
  return {
    id: faker.string.nanoid(7),
    name: faker.person.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
});

router.get("/GetAll", (req, res) => {
  res.status(200).json(usersList);
});

router.get("/GetOne/:id", (req, res, next) => {
  const user = usersList.find((item) => item.id == req.params.id);

  if (!user) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(user);
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

  // if (!userBody.name || !userBody.email || !userBody.phone) {
  //   const error = new Error("Invalid Data");
  //   error.status = 400;
  //   return next(error);
  // }

  // if (isDuplicate) {
  //   const error = new Error("Duplication Error => name");
  //   error.status = 400;
  //   return next(error);
  // }

  // const newUser = { id: faker.string.nanoid(7), ...userBody };
  // usersList.push(newUser);
  // res.status(201).json(newUser);
});

router.put("/update", (req, res, next) => {
  const updatedUser = req.body;

  if (!updatedUser.id) {
    const error = new Error("Field Required => id");
    error.status = 400;
    return next(error);
  }
  const userIndex = usersList.findIndex(({ id }) => updatedUser.id == id);

  if (!userIndex) {
    const error = new Error("User Not Found");
    error.status = 400;
    return next(error);
  }

  usersList[userIndex] = updatedUser;
  res.status(200).json(usersList[userIndex]);
});

export default router;
