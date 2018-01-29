// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://0.0.0.0:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  } 
  else {
    console.log(err); 
  }
});
