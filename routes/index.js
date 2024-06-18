const express = require("express");
const router = express.Router();
const { localAuth } = require("../controllers/authController");

router.get("/", (req, res) => {
  res.render("index");
});
router.post("/register", localAuth);

module.exports = router;
