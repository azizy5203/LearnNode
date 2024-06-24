import Task from "../models/TaskModel.js";

async function getAllTasks(req, res, next) {
  try {
    const getAllTasks = await Task.find({}).populate("assignee");
    res.status(200).json(getAllTasks);
  } catch (error) {
    console.log("🚀 ~ getAllTasks ~ error:", error);
    const err = new Error(error);
    err.status = 500;
    return next(err);
  }
}
async function createTask(req, res, next) {
  try {
    const userBody = req.body;
    const createdUser = await Task.create(userBody);
    res.status(200).json(createdUser);
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function getOneTask(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await Task.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log("🚀 ~ getOneUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    const user = req.body;
    const upadetedUser = await Task.findByIdAndUpdate(user._id, user);
    res.status(200).json(upadetedUser);
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const userId = req.params.id;
    const deletedUser = await Task.findByIdAndDelete(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log("🚀 ~ deleteUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

export { createTask, getAllTasks, getOneTask, deleteTask, updateTask };
