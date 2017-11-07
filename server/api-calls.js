var axios = require('axios')


//exporting the resolved value of the API call

module.exports = axios.get('https://data.cityofnewyork.us/resource/2uhg-smem.json')
  .then(function(response) {
  	return response;
  })
  .catch(function(err) {
  	console.error(err)
  })

