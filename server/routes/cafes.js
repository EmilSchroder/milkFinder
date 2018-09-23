const express = require('express');
const db = require('../db/db');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  db.getAllCafes().then(cafe => res.json(cafe));
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  db.getCafeById(id).then(cafe => res.json(cafe));
});

router.get('/:id/milks', (req,res) => {
  let cafeId = req.params.id

  db.getMilksByCafe(cafeId).then(milks => res.json(milks))
})

router.post('/', (req,res)=>{
  const {cafe_name, latitude, longitude, website} = req.body
  
  db.cafeExists(cafe_name)
    .then(exists => {
      if(exists.length>0){
        return res.status(400).send({message: 'Cafe already registered'})
      }
    db.addCafe(cafe_name, latitude, longitude, website)
      .then(id => {
        if(id){
          return res.send({"message":"Added to database" , "id" : id[0]})
        }})
      .catch(err => {
        res.status(500).send({message: err.message})
      })
  })
  

      
})


module.exports = router;
