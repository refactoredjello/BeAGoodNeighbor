//Instanting the connection to the db and supplying sequalize instance
const Sequelize = require('Sequelize')
const sequelize = new Sequelize('beAGoodNeighborDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})

// Testing Connection to db
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.')
})
.catch(err => {
  console.error('Unable to connect to the database:', err)
})

// Create the table communities instaniating a sequelize model
const Communities = sequelize.define('communities',  {
  the_geom: Sequelize.STRING,
  development: Sequelize.STRING,
  tds_num: Sequelize.INTEGER,
  borough: Sequelize.STRING,
  facility: Sequelize.STRING,
  sponsor: Sequelize.STRING,
  program: Sequelize.STRING,
  address: Sequelize.STRING,
  telephone: Sequelize.STRING
})

//Create a users table
const Users = sequelize.define('users',  {
  username: Sequelize.STRING,
  password: Sequelize.STRING 
})

//Sequelize creates table using sync - if force option is true, sync drops table if it exists
Users.sync({force: false})
.then((message) => console.log('SUCCESS CREATING USER TABLE '))
.catch((err) => console.log('ERROR: ', err))

//Sequelize creates table using sync - if force option is true, sync drops table if it exists
Communities.sync({force: false})
.then((message) => console.log('SUCCESS CREATING COMMUNITIES TABLE '))
.catch((err) => console.log('ERROR: ', err))

module.exports.Users = Users
module.exports.Communities = Communities