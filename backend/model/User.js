const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    dob: {
      type: Date,
    },
    follows: {
      type: [{ follow_id: mongoose.Schema.Types.ObjectId }],
    },
    following: {
      type: [{ following_id: mongoose.Schema.Types.ObjectId }],
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;
