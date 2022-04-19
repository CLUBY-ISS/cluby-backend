const express= require ('express');
const router = express.Router();
const {Club} = require('../models/club');

router.get(`/`, async (req, res) =>{
  const clubList = await Club.find();
  if (!clubList) {
    res.status(500).json({ success : false});
  }
  res.status(200).send(clubList);
})

router.get(`/:id`, async (req, res) =>{
    const club = await Club.findById(req.params.id);

    if(!club){
        res.status(500),json({message: 'The club with the given ID was not found .'})
    }
    res.status(200).send(club);
})




router.post(`/`,(req, res) =>{
  const club= new Club ({
    name: req.body.name,
    image: req.body.image,
    countClubs:req.body.countClubs

  })

  club.save().then((createdClub=> {
    res.status(201).json(createdClub)
  })).catch((err) => {
    res.status(500).json( {
      error: err,
      success: false
    })
  })

})

module.exports=router;
