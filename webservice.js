var schema = require('./schemas/kitten.js');

var Kitten = schema.Kitten;

const findByName = (req, res) => {
  var name = req.params.name
  Kitten.find({name: name}, (err, kitten) => {
    if (err) {
     res.status(400);
     return res.json(err);
  }
  return res.json(kitten);
});

}

const createKitten = (req, res) => {
  var name = req.body.name;
  var cat = new Kitten({ name: name});
  cat.save({name: name}, (err, kitten) => {
    if (err) {
      res.status(400);
      return res.json(err);

  }
    res.status(201);
    return res.json(kitten._id);
  });

}

module.exports = {
 findByName,
 createKitten
};

