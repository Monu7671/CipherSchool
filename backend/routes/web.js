const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { User } = require("../model/User");
const Web = require("../model/Web");

router.put("/update_web", fetchuser, async (req, res) => {
  try {
    let web_update = await User.findById(req.user.id);
    if (!web_update) {
      return res.status(401).send("Access Denied");
    }

    let user_id = web_update.id.toString();

    web_update = await Web.findByIdAndUpdate(user_id, req.body);
    if (!web_update) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Updated", web_update });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.delete("/remove_web", fetchuser, async (req, res) => {
  try {
    let web_delete = await User.findById(req.user.id);
    if (!web_delete) {
      return res.status(400);
    }
    let user_id = web_delete.id.toString();
    web_delete = await Web.findByIdAndDelete(user_id, req.body);
    if (!web_delete) {
      res.status(404).send("No parameter found");
    } else {
      res.json({ message: "Successfully Deleted", web_delete });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
