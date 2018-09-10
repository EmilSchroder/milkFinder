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

    console.log('router')
    
// let newCafe = {
//     cafe: cafeobj.cafename,
//     latitude: JSON.stringify(req.body.lat),
//     longitude: JSON.stringify(req.body.lon),
//     cow: JSON.stringify(req.body.Cowcheck),
//     soy: JSON.stringify(req.body.Soycheck),
//     almond: JSON.stringify(req.body.Almondcheck),
//     coconut: JSON.stringify(req.body.Cocountcheck),
//     rice: JSON.stringify(req.body.ricecheck)
// }



    db.addACafe(req.body)


})

router.get('/:id', (req,res)=>{
    let id = req.params.id

    db.getCafeById(id)
    .then(cafe => 
        res.json(cafe))
})


module.exports = router