var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    var repo = req.query['repo'],
        package = req.query['name'];
    request({
        url: 'https://' + 'vishnuraom' + ':' + '89e2163f8ed29dc79356ed122639543b087b735e' + "@api.bintray.com/packages/vishnuraom/" + repo + "/" + package + "/files",
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            res.json(obj);
            res.end();
        }
    });
});

module.exports = router;
