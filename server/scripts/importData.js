//IMPORTANT - run this script once to import the data into the database
//instance of sequelize model
var Communities = require('../db.js').Communities
var axios = require('axios')

//exporting the resolved value of the API call
const fetchData = axios.get('https://data.cityofnewyork.us/resource/2uhg-smem.json')
  .then(function(response) {
  	return response
  })
  .catch(function(err) {
  	console.error(err)
  })

//running the api call via axios
fetchData.then((response) => {
	response.data.forEach( (row) => {
		//sequelize instance of communities table handles the insert of each row
		Communities.create({
			the_geom: JSON.stringify(row.the_geom),
			development: row.development,
			tds_num: row.tds_num,
			borough: row.borough,
			facility: row.facility,
			sponsor: row.sponsor,
			program: row.program,
			address: row.address,
			telephone: row.telephone,
		}).then(console.log("row created")).catch(console.log("error creating row"))
	})
})