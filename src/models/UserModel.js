import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "YOU MUST ENTER A NAME"],
  },
  username: {
    type: String,
    required: [true, "YOU MUST ENTER A USERNAME"],
  },
  email: {
    type: String,
    required: [true, "YOU MUST ENTER An EMAIL"],
  },
  phone: {
    type: String,
    required: [true, "YOU MUST ENTER A PHONE NUMBER"],
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
