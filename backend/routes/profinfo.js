const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../model/User");
const Prof = require("../model/ProfInfo");

router.put("/update_prof", fetchuser, async (req, res) => {
  try {
    let prof_update = await User.findById(req.user.id);
    if (!prof_update) {
      return res.status(401).send("Access Denied");
    }
    let user_id = prof_update.id.toString();

    prof_update = await Prof.findByIdAndUpdate(user_id, req.body);
    if (!prof_update) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Updated", prof_update });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.delete("/prof_remove", fetchuser, async (req, res) => {
  try {
    let prof_delete = await User.findById(req.user.id);
    if (!prof_delete) {
      return res.status(401).send("Access Denied");
    }
    let user_id = prof_delete.id.toString();

    prof_delete = await Prof.findByIdAndDelete(user_id, req.body);
    if (!prof_delete) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Updated", prof_delete });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;
