var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('config');

var mongoose = require('mongoose');
var mongoDbConfig = config.get("mongodb");

var redis = require("redis");
var redisConfig = config.get("redis");

var routes = require('./routes/index');
var users = require('./routes/users');
var loggers = require('./routes/loggers');
var useractions = require('./routes/userActions');

var app = express();

try {
    mongoose.connect("mongodb://"+mongoDbConfig.host+":"+mongoDbConfig.port+"/"+mongoDbConfig.dbName);
}catch (e){
    console.log("Mongodb connection error");
    console.log(e);
}
try {
    var redisClient = redis.createClient(redisConfig.port, redisConfig.host);
}catch (e){
    console.log("Redis connection error");
    console.log(e);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/loggers', loggers);
app.use('/useractions', useractions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });



}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
