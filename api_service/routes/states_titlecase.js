const express = require('express');
const router = express.Router();

// handle incoming request to /users
router.get('/', (req, res, next) => {
    var Request = require("request");
    console.log(req.query.code);

    Request.get(`http://35.232.48.65:3101/stateToCode?state=${req.query.state}`, (error, response, body) => {

        console.log(response);
        if (error) {
            return console.dir(error);
        }

        res.status(200).json({
            code: JSON.parse(response.body).code
        });
    });
});

module.exports = router;