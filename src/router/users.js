import express from "express";

const router = express.Router();

router.post("/addUser", (req, res, next) => {
  const user = req.body;
  if (!user.name) {
    const error = new Error("no name");
    error.status = 400;
    return next(error);
  }
  res.status(201).json(user);
});

export default router;
