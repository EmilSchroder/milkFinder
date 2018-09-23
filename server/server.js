const path = require('path')
const express = require('express')
const cafes = require('./routes/cafes')
const milks = require('./routes/milks')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/cafes', cafes)
server.use('/api/milks', milks)

module.exports = server
