'usestrict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

var mongoURI = "mongodb://localhost:27017/ecommerce";

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log("connected to mongoDB at: ", mongoURI);
});

var port = 9001;

app.listen(port, function() {
  console.log('listening on port ', port);
});
