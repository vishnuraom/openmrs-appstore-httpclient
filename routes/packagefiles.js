var express = require('express');
var request = require('request');
var btoa = require('btoa');
var router = express.Router();


router.get('/', function(req, res, next) {
  function make_base_auth(user, password) {
          var token = user + ':' + password;
          var hash = btoa(token);
          return "Basic " + hash;
      }
  function make_url(){
          var repo = req.query['repo'],
              package = req.query['name'],
              url = "https://api.bintray.com/packages/vishnuraom/" + repo + "/" + package + "/files";
          return url;
  }

  var options = {
        url: make_url(),
        headers: {
          'Authorization': make_base_auth('vishnuraom','89e2163f8ed29dc79356ed122639543b087b735e')
        }
  };

  function callback(error, response, body) {
    console.log("in callback function");
    console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      res.json(obj);
      res.end();
    }
  }

  request(options, callback);

  })  ;
module.exports = router;
