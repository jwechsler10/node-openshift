var tools =  require("./connectToDB.js");
var api = require("./webservice.js");

const conn = tools.db;
const getByName = api.findByName;

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Test'));
app.get('/kitty/:name', getByName);

app.listen(8080, '0.0.0.0');
console.log("Server running on port 8080");
