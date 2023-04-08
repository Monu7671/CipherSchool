const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    education: {
      type: String,
    },
    org: {
      type: String,
    },
  },
  {
    collection: "profs",
  }
);

const Prof = mongoose.model("profs", ProfSchema);
module.exports = Prof;
