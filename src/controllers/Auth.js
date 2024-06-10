import User from "../models/UserModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req, res, next) {
  try {
    const user = req.body;
    const hashedPass = await bcrypt.hash(user.password, 10);
    const newUser = User.create({ ...user, password: hashedPass });
    res.status(201).json(newUser);
  } catch (error) {
    const err = new Error(err);
    err.status = 400;
    return next(err);
  }
}

export { register };
