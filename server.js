var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, './client')));

app.listen(3000, function() {
  console.log('listening on port 3000!')
})


// app.post('/borough', function(req, res){
// 	Borough.find({name: req.body.borough}).then(borough){
// 		res.send(borough)
// 	}
// })