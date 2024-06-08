import User from "../models/UserModel.js";

async function getAllUsers(req, res, next) {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("🚀 ~ getAllUsers ~ error:", error);
    const err = new Error(error);
    err.status = 500;
    return next(err);
  }
}
async function createUser(req, res, next) {
  try {
    const userBody = req.body;
    const createdUser = await User.create(userBody);
    res.status(200).json(createdUser);
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function getOneUser(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log("🚀 ~ getOneUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = req.body;
    const upadetedUser = await User.findByIdAndUpdate(user._id, user);
    res.status(200).json(upadetedUser);
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log("🚀 ~ deleteUser ~ error:", error);
    const err = new Error(error);
    err.status = 400;
    return next(err);
  }
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    console.log("🚀 ~ deleteUser ~ error:", error);
    return error;
  }
}

export { createUser, getAllUsers, getOneUser, deleteUser, updateUser };
