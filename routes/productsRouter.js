const express = require('express');
const router = express();

router.get('/products', (req, res) => {
    res.send("Welcome");
})

module.exports = router;