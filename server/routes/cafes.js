const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())

router.get('/', (req,res) => {

    db.getCafe()
    .then(cafe =>
        res.json(cafe))

})


module.exports = router