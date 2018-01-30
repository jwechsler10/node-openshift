const tools =  require('./connectToDB.js');
const api = require('./webservice.js');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const conn = tools.db;
const getByName = api.findKittenByName;
const postCat = api.createKitten;
const putCat = api.updateKitten;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/kitty/:name?', getByName);
app.post('/kitty', postCat);
app.put('/kitty/:_id?', putCat);
app.get('/', (req, res) =>  res.sendFile(path.join(__dirname + '/index.html')));

app.listen(8080, '0.0.0.0');
console.log("Server running on port 8080");
