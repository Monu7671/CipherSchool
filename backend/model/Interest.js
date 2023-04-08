const mongoose = require("mongoose");
const { Schema } = mongoose;

const InterestSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    app_development: {
      type: Boolean,
    },
    web_development: {
      type: Boolean,
    },
    game_development: {
      type: Boolean,
    },
    data_structure: {
      type: Boolean,
    },
    programming: {
      type: Boolean,
    },
    machine_learning: {
      type: Boolean,
    },
    data_science: {
      type: Boolean,
    },
    other: {
      type: Boolean,
    },
  },
  {
    collection: "interests",
  }
);

const Interest = mongoose.model("interests", InterestSchema);
module.exports = Interest;
