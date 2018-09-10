const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())

router.get('/', (req,res) => {

    db.getAllCafes()
    .then(cafe =>
        res.json(cafe))

})

router.post('/', (req,res) => {

    console.log('router');
    
    db.addACafe(req.body.cafename)


})

router.get('/:id', (req,res)=>{
    let id = req.params.id

    db.getCafeById(id)
    .then(cafe => 
        res.json(cafe))
})


module.exports = router