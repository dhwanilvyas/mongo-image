require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + process.env.DB_USER_NAME + ':' + process.env.DB_USER_PASSWORD + '@ds139438.mlab.com:39438/codoc');

var mainController = require('./controller/mainController');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('./'))

app.use('/', mainController);

app.listen(3000);

console.log('Listening on 3000');