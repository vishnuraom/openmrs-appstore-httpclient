var express = require('express');
var request = require('request');
var async = require('async');
var router = express.Router();

router.get('/', function(req, res, next) {
    var repo = req.query['repo'];
    var arr = [];

    function getDetails(name, callback) {
        request({
            url: 'https://' + process.env.BINTRAY_USERNAME + ':' + process.env.BINTRAY_APIKEY + '@api.bintray.com/packages/' + process.env.BINTRAY_USERNAME + '/' + repo + '/' + name,
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                callback(null, info);
            }
        });
    }
    request.get({
            url: 'https://api.bintray.com/repos/' + process.env.BINTRAY_USERNAME + '/' + repo + '/packages'
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var obj = JSON.parse(body);
                async.each(obj, function(item, callback) {
                    getDetails(item.name, function(err, details) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        if (details) {
                            arr.push(details);
                            callback();
                        }
                    });
                }, function(err) {
                    if (err) {
                        res.end();
                    } else {
                        res.json(arr);
                        res.end();
                    }
                });
            }
        });
});

module.exports = router;
