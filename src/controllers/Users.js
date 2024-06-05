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
async function getAllUsers(user) {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);
    return error;
  }
}

export { createUser };
