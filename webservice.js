var kitten = require('./schemas/kitten.js');

const findByName = kitten.findKittenByName;



const getByName = (req,res) => {
  var name = req.params.name;
  var result = findByName(name);
  res.status(200);
  return res.json(result); 



}

module.exports = {
  getByName

}
