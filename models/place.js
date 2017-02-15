const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const Place = new Schema({
    name:String,
    type: {
     type: String,
     enum : ['COFFEE', 'BOOKS'],
     default : 'COFEE'
   },

    location: { type: { type: String }, coordinates: [Number,Number]
  }

});

module.exports = mongoose.model('Place', Place);
