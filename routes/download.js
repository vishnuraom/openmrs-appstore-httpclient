var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    var repo = req.query['repo'];
    var file_path = req.query['filepath'];
    request.get({
            url: 'https://dl.bintray.com/' + process.env.BINTRAY_USERNAME + repo + '/' + file_path
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var obj = JSON.parse(body);
                res.json(obj);
            }
        });
});

module.exports = router;
