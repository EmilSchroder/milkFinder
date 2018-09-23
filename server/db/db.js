const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const db = require('knex')(config);

function getAllCafes(testConn) {
  let conn = testConn || db;

  return conn('Cafes').select();
}

function cafeExists(cafe_name, testConn){
  let conn = testConn || db;
  return conn('Cafes')
    .select()
    .where("cafe_name", cafe_name)
}

function milkExists(milk_type, testConn){
  let conn = testConn || db;
  return conn('Milks')
    .select()
    .where("milk_type", milk_type)
}

function addCafe(name, lat, long, web, testConn){
  let conn = testConn || db;

  return conn('Cafes')
    .insert({
      cafe_name : name,
      latitude : lat,
      longitude : long,
      website: web
    })
}

function addMilk(name, testConn){
  let conn = testConn || db;

  return conn('Milks')
    .insert({
      milk_type : name,
    })
}


function getCafeById(id, testConn) {
  let conn = testConn || db;

  return conn('Cafes')
    .where('id', id)
    .first();
}

function getAllMilks(testConn) {
  let conn = testConn || db;

  return conn('Milks').select();
}

function getMilkById(id, testConn) {
  let conn = testConn || db;

  return conn('Milks')
    .where('id', id)
    .first();
}

function getCafesByMilk(milkId, testConn){
  let conn = testConn || db;

  return conn('Cafes')
    .join('Cafes_and_Milks', 'Cafes.id', 'Cafes_and_Milks.cafe_id')
    .where('Cafes_and_Milks.milk_id', milkId)
}

function getMilksByCafe(cafeId, testConn){
  let conn = testConn || db;

  return conn('Milks')
    .join('Cafes_and_Milks', 'Milks.id', 'Cafes_and_Milks.milk_id')
    .where('Cafes_and_Milks.cafe_id', cafeId)
}


module.exports = {
  getAllCafes,
  getCafeById,
  getAllMilks,
  getMilkById,
  getCafesByMilk,
  getMilksByCafe,
  addCafe,
  cafeExists,
  addMilk,
  milkExists
};
