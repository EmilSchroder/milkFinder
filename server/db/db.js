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

module.exports = {
  getAllCafes,
  getCafeById,
  addACafe
};
