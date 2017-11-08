var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var searchDB = require('./searchDb.js')

var app = express()

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')))

//On search endpoint, query the database and send the result. 
app.get('/search', (req, res) => {
  searchDB(req.query.borough)
  .then(result => {
  	console.log(result)
  	res.send(result)
  })
  .catch((err) => console.log('Error: ', err))
})

module.exports = app


