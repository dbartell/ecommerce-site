'usestrict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config')

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

var mongoURI = config.MONGO_URI;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log("connected to mongoDB at: ", mongoURI);
});

var port = config.PORT;

app.listen(port, function() {
  console.log('listening on port ', port);
});
