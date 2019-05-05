const express = require('express');
const router = express.Router();

const hash = require('./../data/states_hash');

// handle incoming request to /users
router.get('/', (req, res, next) => {
    console.log(req.query.code);

    res.status(200).json({
        state: hash[req.query.code]
    });
});

module.exports = router;