const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const User = require("../model/User");

router.get("/followers", fetchuser, async (req, res) => {
  try {
    const user_id = req.user.id.toString();
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json(`User ${user_id} Not Found `);
    }
    if (user.follows.length === 0) {
      return res
        .status(200)
        .json({ message: "You are not having any followers" });
    }
    let followers = [];
    for (var i = 0; i < user.follows.length; i++) {
      followers[i] = await User.findById(user.follows[i].follow_id).select(
        "-password -follows -following"
      );
    }
    res.status(200).json(followers);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Some Error Occurred");
  }
});

router.get("/following", fetchuser, async (req, res) => {
  try {
    const user_id = req.user.id.toString();
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json(`User ${user_id} Not Found `);
    }
    if (user.following.length === 0) {
      return res
        .status(200)
        .json({ message: "You are not following any user" });
    }
    let following = [];
    for (var i = 0; i < user.following.length; i++) {
      following[i] = await User.findById(user.following[i].following_id).select(
        "-password -follows -following"
      );
    }
    res.status(200).json(following);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Some Error Occurred");
  }
});

router.put("/add_follower/:id", fetchuser, async (req, res) => {
  try {
    const user_id = req.user.id;
    const follower_id = req.params.id;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json(`User ${user_id} Not Found `);
    }

    const updatefollow = {
      $push: { follows: [{ follow_id: follower_id }] },
    };

    const updatefollowing = {
      $push: { following: [{ following_id: user_id }] },
    };

    const follows = await User.findByIdAndUpdate(user_id, updatefollow);
    const following = await User.findByIdAndUpdate(
      follower_id,
      updatefollowing
    );

    return res.status(200).json({
      follows,
      following,
      message: `Follower ${follower_id.name} Added to ${user_id.name}`,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Some Error Occurred");
  }
});

router.put("/remove_follower/:id", fetchuser, async (req, res) => {
  try {
    const user_id = req.user.id;
    const follower_id = req.params.id;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json(`User ${user_id} Not Found `);
    }

    const updatefollow = {
      $pull: { follows: { follow_id: follower_id } },
    };

    const updatefollowing = {
      $pull: { following: { following_id: user_id } },
    };

    const follows = await User.findByIdAndUpdate(user_id, updatefollow);
    const following = await User.findByIdAndUpdate(
      follower_id,
      updatefollowing
    );

    return res.status(200).json({
      follows,
      following,
      message: `Follower ${follower_id.name} Added to ${user_id.name}`,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Some Error Occurred");
  }
});

module.exports = router;
