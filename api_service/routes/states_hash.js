const express = require('express');
const router = express.Router();
const hash = null;

// handle incoming request to /users
router.get('/', (req, res, next) => {
    var Request = require("request");
    console.log(req.query.code);

    //replace the url with your external IP of the data server
    Request.get(`http://35.232.48.65:3101/codeToState?code=${req.query.code}`, (error, response, body) => {

        if (error) {
            return console.dir(error);
        }

        res.status(200).json({
            state: JSON.parse(response.body).state
        });
    });

});

module.exports = router;