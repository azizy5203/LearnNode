import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "YOU MUST ENTER A NAME"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "YOU MUST ENTER A USERNAME"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "YOU MUST ENTER An EMAIL"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "YOU MUST ENTER A Phone Number"],
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
