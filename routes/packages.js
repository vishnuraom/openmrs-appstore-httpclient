var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
       request.get({ url: "https://api.bintray.com/repos/vishnuraom/omod/packages"},
       function(error, response, body) {
              if (!error && response.statusCode == 200) {
                var obj = JSON.parse(body);
                res.json(obj);
                }
              });
});

module.exports = router;