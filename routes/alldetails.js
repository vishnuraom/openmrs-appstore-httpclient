var express = require('express');
var request = require('request');
var btoa = require('btoa');
var router = express.Router();

router.get('/', function(req, res, next) {
    var repo = req.query['repo'];
    var arr = [];
    request.get({
            url: "https://api.bintray.com/repos/vishnuraom/" + repo + "/packages"
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var obj = JSON.parse(body);
                for (var i = 0; i < obj.length; i++) {
                    var package = obj[i].name;
                    console.log(package);

                    function make_base_auth(user, password) {
                        var token = user + ':' + password;
                        var hash = btoa(token);
                        console.log("Basic " + hash);
                        return "Basic " + hash;
                    }

                    function make_url() {
                        var url = "https://api.bintray.com/packages/vishnuraom/" + repo + "/" + package;
                        console.log(url);
                        return url;
                    }

                    var options = {
                        url: make_url(),
                        headers: {
                            'Authorization': make_base_auth('vishnuraom', '89e2163f8ed29dc79356ed122639543b087b735e')
                        }
                    };

                    function callback(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body);
                            arr.push(info);
                        }
                    }

                    request(options, callback);
                }
                setTimeout(function() {
                    res.json(arr);
                    res.end();
                }, (2 * 1000));
            }
        });
});

module.exports = router;
