const mongoose = require("mongoose");

const { Schema } = mongoose;

const WebSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  {
    collection: "webs",
  }
);
const Web = new mongoose.model("webs", WebSchema);
module.exports = Web;
