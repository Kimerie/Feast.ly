// sets up server requirements
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

//require database
var db = require('../DB/db.js');

//creates server
var app = express();

//creates default port
var port = process.env.PORT || 4444;

//middleware
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

//connects app and port
app.listen(port);
//prints sucess when the server is running 
console.log('Server now listening on port: ', port);

//exports the app server
module.exports = app;