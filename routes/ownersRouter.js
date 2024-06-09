const express = require('express');
const router = express();
const ownerModel = require('../models/owner-model');

router.get('/', (req, res) => {
    res.send("Welcome");
})
if(process.env.NODE_ENV !== 'development'){
    router.post('/test', (req, res) => {
        res.send("this is a development test");
    });
}

module.exports = router;