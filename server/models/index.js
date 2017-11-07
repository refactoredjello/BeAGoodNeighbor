//instance of sequelize model
var Communities = require('../db.js');
var fetchData = require('../api-calls.js');


fetchData.then((response) => {
	console.log(response);
})


// MUST ATTACH THIS TO APP FILE :::
// app.set('models', require('./models'));

// and when you need to require a class of the model to a controller,
// use this application setting rather than a direct import
// var User = app.get('models').User;