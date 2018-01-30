var mongoose = require('mongoose');
mongoose.connect('mongodb://jared:r3dh4t1!@mongodb-test/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection successful');
  });

module.exports = {
  db
}
