var schema = require('./schemas/kitten.js');

var Kitten = schema.Kitten;

const getAllKittens = (req, res) => {
  Kitten.find((err, kitten) => {
  if (err) {
   res.status(400);
   return res.json(err);
  }
  return res.json(kitten);
 });
}

const findKittenByName = (req, res) => {
  var name = req.query.name
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

const updateKitten = (req, res) => {
  var id = req.query._id;
  var newName = req.body.name;
   Kitten.findById(id, (err, kitten) => {
    if (err) {
     res.status(400);
     return res.json(err);
  }

   kitten.name = newName;
   kitten.save((err, kitten) => {
     if (err) {
      res.status(400);
      return res.json(err);
   }
    res.status(200);
    return res.json(kitten._id);
    });
  });
}

module.exports = {
 getAllKittens,
 findKittenByName,
 createKitten,
 updateKitten
};

