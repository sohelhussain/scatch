const express = require('express');
const router = express();
const upload  = require('../config/multer-config');

router.post('/create', upload.single('image'),(req, res) => {
    res.send(req.file);
})

module.exports = router;