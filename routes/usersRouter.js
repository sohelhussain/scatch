const express = require('express');
const router = express();
const { localAuth, login } = require("../controllers/authController");

router.get('/', (req, res) => {
    res.send("user routers");
})

router.post("/register", localAuth);
router.post("/login", login);
module.exports = router;