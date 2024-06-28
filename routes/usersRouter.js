const express = require("express");
const router = express();
const { localAuth, login, logout } = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("user routers");
});

router.post("/register", localAuth);
router.post("/login", login);
router.get("/logout", logout);
module.exports = router;
