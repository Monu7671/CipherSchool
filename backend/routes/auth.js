const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const JWT_SECRET = "secret_token_user";

router.post("/signup", async (req, res) => {
  const { email, password, name, phone_no } = req.body;
  try {
    let check_user = await User.findOne({ email, phone_no });
    if (check_user) {
      return res.status(400).json({
        error: "Sorry ! User already exists with entered email or phone number",
      });
    }

    //   Hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //   New User
    const user = await User.create({
      email,
      password: hashPassword,
      name,
      phone_no,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, JWT_SECRET);
    return res.status(200).json({
      message: `Successfully Merged User ${name}`,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Failed Sign Up" });
  }
});

router.post("/login_email", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ errors: "Please enter correct credentials" });
    }
    let success;
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res
        .status(400)
        .json({ success, errors: "Please enter correct credentials" });
    }
    const payLoad = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payLoad, JWT_SECRET);
    success = true;
    res.status(200).json({
      success,
      message: "Successfully Signed In",
      id: user.id,
      name: user.name,
      email: user.email,
      authToken,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Failed Sign In" });
  }
});

router.post("/login_phone", async (req, res) => {
  const { phone_no, password } = req.body;
  try {
    const user = await User.findOne({ phone_no });
    if (!user) {
      res.status(400).send({ errors: "Please enter correct credentials" });
    }
    let status;
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res
        .status(400)
        .json({ status, errors: "Please enter correct credentials" });
    }
    const payLoad = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payLoad, JWT_SECRET);
    status = true;
    res.json({
      status,
      message: "Successfully Signed In",
      id: user.id,
      name: user.name,
      phone_no: user.phone_no,
      authToken,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.put("/change_password", fetchuser, async (req, res) => {
  const { current_password, confirm_password, new_password } = req.body;
  try {
    let status = false;
    const user_id = req.user.id.toString();
    const user = await User.findById(user_id);
    if (!user) {
      res.status(404).send("Login Required ! User Not Found");
    }
    if (current_password !== confirm_password) {
      res.status(400).json({ status, error: "Password mismatch" });
    }
    const checkPassword = await bcrypt.compare(current_password, user.password);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(new_password, salt);
    if (!checkPassword) {
      res.status(400).json({ status, errors: "Please enter correct password" });
    }
    let password_update = await User.findByIdAndUpdate(user_id, {
      password: hashPassword,
    });
    status = true;
    res.status(200).json({ status, message: "Successfully Updated Password" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.put("/update_user", fetchuser, async (req, res) => {
  try {
    let success = false;
    let user_update = await User.findById(req.user.id);

    if (!user_update) {
      return res.status(401).send("Access Denied");
    }
    let user_id = user_update.id.toString();

    user_update = await User.findByIdAndUpdate(user_id, req.body);
    if (!user_update) {
      res.status(404).send("No parameters found");
    } else {
      success = true;
      res.json({ success, message: "Successfully Updated", user_update });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.delete("/delete_user", fetchuser, async (req, res) => {
  try {
    let success = false;
    let user_delete = await User.findById(req.user.id);

    if (!user_delete) {
      return res.status(401).send("Access Denied");
    }

    let user_id = user_delete.id.toString();

    user_delete = await User.findByIdAndDelete(user_id);
    if (!user_delete) {
      res.status(404).send("No parameters found");
    } else {
      success = true;
      res.json({
        success,
        message: "Successfully Deleted User",
        user_delete,
      });
    }
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send("Some error occurred", { message: "Failed User Deletion" });
  }
});

router.get("/view_profile", fetchuser, async (req, res) => {
  let status = false;
  try {
    const user_id = req.user.id;
    const profile = await User.findById(user_id.toString()).select("-password");
    status = true;
    res.json({ status, message: "Profile Fetched", profile });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
