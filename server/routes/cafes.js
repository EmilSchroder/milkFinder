const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())

router.get('/', (req,res) => {
    res.send('Hello')
})


module.exports = router