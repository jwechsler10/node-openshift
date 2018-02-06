var mongoose = require('mongoose');
mongoose.connect('mongodb://userAPW:AnXFGXksMbofXAap@mongodb/cats');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection successful');
  });

module.exports = {
  db
}
