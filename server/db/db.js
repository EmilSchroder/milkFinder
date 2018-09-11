const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getAllCafes(testConn){
    let conn = testConn || db

    return conn('Cafes').select()
}

function getCafeById(id, testConn){
    let conn = testConn || db

    return conn('Cafes')
    .where('id', id)
    .first()
}

function addACafe(cafeobj, testConn){
    let conn = testConn || db
    
    
    return conn('Cafes')
    .insert({
        cafe: cafeobj.cafename,
        latitude: cafeobj.lat,
        longitude: cafeobj.lon,
        cow: cafeobj.Cowcheck,
        soy: cafeobj.Soycheck,
        almond: cafeobj.Almondcheck,
        coconut: cafeobj.Coconutcheck,
        rice: cafeobj.Ricecheck
    
    })

}

module.exports = {
    getAllCafes,
    getCafeById,
    addACafe
}