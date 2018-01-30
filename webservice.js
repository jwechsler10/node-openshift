var schema = require('./schemas/kitten.js');

var Kitten = schema.Kitten;

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

