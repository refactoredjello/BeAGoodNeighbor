var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, './client')));

var app.listen(3000, function() {
  console.log('listening on port 3000!')
})

module.exports = app;