const path = require('path')
const express = require('express')
const cafes = require('./routes/cafes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/cafes', cafes)

module.exports = server
