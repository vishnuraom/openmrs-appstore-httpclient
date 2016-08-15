var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var dotenv = require('dotenv');
dotenv.load();

var packages = require('./routes/packages')
var details = require('./routes/details')
var repositories = require('./routes/repositories')
var packagefiles = require('./routes/packagefiles')
var alldetails = require('./routes/alldetails')
var search = require('./routes/search')

var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(favicon(path.join('public', 'images', 'favicon.ico')));
app.use('/packages', packages);
app.use('/details', details);
app.use('/repositories', repositories);
app.use('/packagefiles', packagefiles);
app.use('/alldetails', alldetails);
app.use('/search', search);

module.exports = app;
