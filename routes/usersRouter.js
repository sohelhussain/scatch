const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send("user routers");
})

module.exports = router;