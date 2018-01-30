var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

const findKittenByName = (name) => { 
 Kitten.find(name, (err, kitten) => {
    if (err) {
      return err;
  }
   return kitten;
});
};


module.exports = {
  //Kitten,
  findKittenByName
};
