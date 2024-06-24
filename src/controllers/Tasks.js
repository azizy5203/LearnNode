import Task from "../models/TaskModel.js";
import User from "../models/UserModel.js";
import taskStatusEnum from "../enums/TaskStatus.js";

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
    const taskBody = req.body;
    const createdTask = await Task.create(taskBody);
    const assigneeId = req.body.assignee;
    await User.findByIdAndUpdate(assigneeId, {
      $push: { tasks: createdTask },
    });
    res.status(200).json(createdTask);
  } catch (error) {
    console.log("🚀 ~ createTask ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function getOneTask(req, res, next) {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    res.status(200).json(task);
  } catch (error) {
    console.log("🚀 ~ getOneTask ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    const task = req.body;
    const upadetedTask = await Task.findByIdAndUpdate(task._id, task);
    res.status(200).json(upadetedTask);
  } catch (error) {
    console.log("🚀 ~ updateTask ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);
    res.status(200).json(deletedTask);
  } catch (error) {
    console.log("🚀 ~ deleteTask ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}
async function getStatusList(req, res, next) {
  try {
    res.status(200).json(taskStatusEnum);
  } catch (error) {
    console.log("🚀 ~ deleteTask ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

export {
  createTask,
  getAllTasks,
  getOneTask,
  deleteTask,
  updateTask,
  getStatusList,
};
