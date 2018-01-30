const tools =  require("./connectToDB.js");
const api = require("./webservice.js");
const bodyParser = require('body-parser');
const express = require('express');

const conn = tools.db;
const getByName = api.findByName;
const postCat = api.createKitten
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Test'));
app.get('/kitty/:name', getByName);
app.post('/kitty', postCat);

app.listen(8080, '0.0.0.0');
console.log("Server running on port 8080");
