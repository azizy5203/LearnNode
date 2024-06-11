import User from "../models/UserModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req, res, next) {
  try {
    const user = req.body;
    const hashedPass = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: hashedPass });
    res.status(201).json(newUser);
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ err: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ err: "Invalid email or password" });
    }

    const token = jwt.sign(user.toJSON(), "231", { expiresIn: "4d" });

    const filteredEntries = Object.entries(user._doc).filter(
      ([key]) => !["createdAt", "updatedAt", "password"].includes(key)
    );
    const filteredObj = Object.fromEntries(filteredEntries);

    res.status(200).json({ user: filteredObj, token });
  } catch (error) {
    console.error("🚀 ~ login ~ error:", error);
    const err = new Error(error);
    err.status = 500;
    return next(err);
  }
}
export { register, login };
