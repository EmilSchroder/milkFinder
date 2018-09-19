const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const db = require('knex')(config);

function getAllCafes(testConn) {
  let conn = testConn || db;

  return conn('Cafes').select();
}

function getCafeById(id, testConn) {
  let conn = testConn || db;

  return conn('Cafes')
    .where('id', id)
    .first();
}

// function addACafe(cafeobj, testConn){
//     let conn = testConn || db

//     return conn('Cafes')
//     .insert({
//     cafe: cafeobj.cafename,
//     latitude: JSON.stringify(req.body.lat),
//     longitude: JSON.stringify(req.body.lon),
//     cow: JSON.stringify(req.body.Cowcheck),
//     soy: JSON.stringify(req.body.Soycheck),
//     almond: JSON.stringify(req.body.Almondcheck),
//     coconut: JSON.stringify(req.body.Cocountcheck),
//     rice: JSON.stringify(req.body.ricecheck)
// }
//     )

// }

module.exports = {
  getAllCafes,
  getCafeById,
  addACafe
};
