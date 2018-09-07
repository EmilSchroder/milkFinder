const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getCafe(testConn){
    let conn = testConn || db

    return conn('Cafes').select()
}

module.exports = {
    getCafe
}