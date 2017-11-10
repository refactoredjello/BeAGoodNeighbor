//instance of sequelize model
var Saved = require('./db.js').Saved
var Communities = require('./db.js').Communities
var syncDb = require('./db.js').syncDb

// sequelize instance of saved table handles the insert of each row
// send the saved data back to front-end
// send back the results data that has matching itemIds
module.exports = (sessionID, itemsArray) => {
  var reformatted = itemsArray.map((id) => { 
    var obj = {};
    obj.session_id = sessionID;
    obj.item_id = id;
    return obj;
  })
  console.log("reformatted data: ", reformatted);
  return syncDb()
  .then(Saved.bulkCreate.bind(Saved, reformatted))
  .catch((err) => console.error('Caught exception from bulkCreate:', err))
  .then(() => {
    return Communities.findAll({
      where: {
        id: itemsArray
      }
    })
  })
}

