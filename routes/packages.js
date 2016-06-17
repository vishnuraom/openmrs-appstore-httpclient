var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
      var repo = req.query['repo'];
      request.get({ url: "https://api.bintray.com/repos/vishnuraom/"+repo+"/packages"},
      function(error, response, body) {
            if (!error && response.statusCode == 200) {
              var obj = JSON.parse(body);
              res.json(obj);
              res.end();
              }
            });
});

module.exports = router;
