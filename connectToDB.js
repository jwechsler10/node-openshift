var mongoose = require('mongoose');
mongoose.connect('mongodb://user65B:lFIEf7qXUHMU4Uih@mongodb/sampledb');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection successful');
  });

module.exports = {
  db
}
