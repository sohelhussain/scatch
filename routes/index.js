const express = require("express");
const router = express.Router();
const { localAuth, login } = require("../controllers/authController");

router.get("/", (req, res) => {
  res.render("index");
});
router.post("/register", localAuth);
router.post("/login", login);

module.exports = router;
