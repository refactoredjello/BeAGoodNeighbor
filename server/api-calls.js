var path = require('path')
var express = require('express')
var axios = require('axios')

axios.get('https://data.cityofnewyork.us/resource/2uhg-smem.json')
  .then(function(response) {
  	console.log(response)
  	// send response to facilities info holder (to the database)
  })
  .catch(function(err) {
  	console.error(err)
  })
// set up API key
// 
// set up the map
// place markers on the map
// get into community gardens
// make the routes