const express = require('express');
const db = require('../db/db');
const router = express.Router();
router.use(express.json());

router.get('/', (req,res) => {
    db.getAllMilks().then(milks => res.json(milks));
})

router.get('/:id', (req,res)=> {
    let id = req.params.id

    db.getMilkById(id).then(milk => res.json(milk))
})


router.get('/:id/cafes', (req,res)=>{
    let milkId = req.params.id
  
    db.getCafesByMilk(milkId).then(cafes => res.json(cafes));
  
  })
  

module.exports = router;