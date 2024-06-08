import User from "../models/UserModel.js";

async function createUser(user) {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);
    return error;
  }
}
async function getAllUsers() {
  try {
    const allUsers = await User.find({});
    return allUsers;
  } catch (error) {
    console.log("🚀 ~ getAllUsers ~ error:", error);
    return error;
  }
}

async function getOneUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("🚀 ~ getOneUser ~ error:", error);
    return error;
  }
}

async function updateUser(user) {
  try {
    const upadetedUser = await User.findByIdAndUpdate(user._id, user);
    return upadetedUser;
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error);
    return error;
  }
}

async function deleteUser(id) {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    console.log("🚀 ~ deleteUser ~ error:", error);
    return error;
  }
}

export { createUser, getAllUsers, getOneUser, deleteUser, updateUser };
