var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')

var searchDB = require('./searchDb.js')

var app = express()

app.use(session({
  secret: 'team coruscant',
  resave: false,
  saveUninitialized: false
}))
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

app.post('/saved', (req, res) => {
  res.send(req.sessionID)
})


module.exports = app
