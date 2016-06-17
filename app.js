var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var packages =require('./routes/packages')
var details =require('./routes/details')

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(favicon(path.join('public', 'images','favicon.ico')));
app.use('/packages', packages);
app.use('/details', details);

module.exports = app;
