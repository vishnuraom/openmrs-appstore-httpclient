var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    var repo = req.query['repo'],
        term = req.query['term'];
    request({
        url: 'https://' + process.env.BINTRAY_USERNAME + ':' + process.env.BINTRAY_APIKEY + '@api.bintray.com//search/packages?' + 'subject=' + process.env.BINTRAY_USERNAME + '&repo=' + repo + '&name=' + term,
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            res.json(obj);
            res.end();
        }
    });
});

module.exports = router;
