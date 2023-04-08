const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../model/User");
const Prof = require("../model/ProfInfo");

router.put("/update_prof", fetchuser, async (req, res) => {
  try {
    let int_update = await User.findById(req.user.id);
    if (!int_update) {
      return res.status(401).send("Access Denied");
    }
    let user_id = int_update.id.toString();

    int_update = await Prof.findByIdAndUpdate(user_id, req.body);
    if (!int_update) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Updated", int_update });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.delete("/int_remove", fetchuser, async (req, res) => {
  try {
    let int_delete = await User.findById(req.user.id);
    if (!int_delete) {
      return res.status(401).send("Access Denied");
    }
    let user_id = int_delete.id.toString();

    int_delete = await Prof.findByIdAndDelete(user_id, req.body);
    if (!int_delete) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Updated", int_delete });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;
