var Kitten = require('./schemas/kitten.js');

const findByName = (req, res) => {
  var name = req.params.name
  Kitten.find( (err, kitten) => {
    if (err) {
     res.status(400);
     return res.json(err);
  }
  return res.json(kitten);
});

}

module.exports = {
 findByName
};

