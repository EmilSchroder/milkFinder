const path = require('path')
const express = require('express')
const cors = require('cors')

const corsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true
  }

const cafes = require('./routes/cafes')
const milks = require('./routes/milks')
const cafesAndMilks = require('./routes/cafesAndMilks')

const server = express()

server.use(cors(corsOptions))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/cafes', cafes)
server.use('/api/milks', milks)
server.use('/api/cafesandmilks', cafesAndMilks)

module.exports = server
