const express = require('express');
const db = require('../db/db');
const router = express.Router();
router.use(express.json());

router.get('/', (req,res) => {
    db.getAllMilks().then(milks => res.json(milks));
})

router.post('/', (req,res)=>{
    const {milk_type} = req.body
  
    db.milkExists(milk_type)
      .then(exists => {
        if(exists.length>0){
          return res.status(400).send({message: 'Milk already registered'})
        }
      db.addMilk(milk_type)
        .then(id => {
          if(id){
            return res.send({"message":"Added to database" , "id" : id[0]})
          }})
        .catch(err => {
          res.status(500).send({message: err.message})
        })
    })
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