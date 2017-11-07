//instance of sequelize model
var Communities = require('../db.js');
var fetchData = require('../api-calls.js');


console.log(Communities)

fetchData.then((response) => {
	response.data.forEach( (row) => {
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


// MUST ATTACH THIS TO APP FILE :::
// app.set('models', require('./models'));

// and when you need to require a class of the model to a controller,
// use this application setting rather than a direct import
// var User = app.get('models').User;