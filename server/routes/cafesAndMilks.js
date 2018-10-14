const express = require('express');
const db = require('../db/db');
const router = express.Router();
router.use(express.json());


router.get('/', (req,res) => {
    db.getCafesAndMilksJoin().then(data => res.json(data));
})


router.post('/', (req,res) => {

    const {cafeId, milkArr} = req.body

    const dataObj = []
    
    milkArr.map(milkId => {
        return dataObj.push({"cafe_id":cafeId, "milk_id":milkId})
    })

    db.addCafesMilksJoin(dataObj).then(id => res.json(id))
    //  
    // milkArr.map(milkId => {
    //    db.addCafesMilksJoin(cafeId, milkId).then(id => res.json(id)) 
    // })

    
})

module.exports = router;