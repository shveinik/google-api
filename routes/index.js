var express = require('express');
var router = express.Router();
var Place = require("../models/place");

/* GET home page. */
  router.get('/', function(req, res, next) {
    Place.find({},{_id:0, name:1, location:1, description:1,type:1},(err, places) =>{
      if(err){
        next(err);
      }else{
      res.render('index', { places });
    }
    });

});

 router.post("/",(req, res, next) => {
    let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

   const newPlace = {
      name:        req.body.name,
      type:        req.body.type,
      description: req.body.description,
      location:    location
    };

    const place = new Place(newPlace);

    place.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });


});

module.exports = router;
