var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var start = require('./routes/start');
var load = require('./routes/load');
var newgame = require('./routes/newgame');
var game = require('./routes/game');
var test = require('./routes/test');
var playerfetcher = require('./routes/playerfetcher');
// var partials = require('./routes/partials') // test
// var home = require('./routes/home')

var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongostore')(session);
var mongoose = require('mongoose');
// var requirejs = require('requirejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use(session(
  {
  secret: 'secret1',
  resave: true,
  saveUninitialized: true,
  rolling: true,
  store: new MongoStore(
    {
    db: 'login',
    host: '127.0.0.1',
    port: '27017',
    autoRemove: 'disabled',
    collection: 'users',
    w:1,
    }),
  name: 'managersession',
  // unset: 'destroy',
  cookie: { maxAge: 2629746000 }
  }));

/*
// Angoose bootstraping 
require("angoose").init(app, {
   'module-dirs':'./public/models',
   'mongo-opts': 'localhost:27017/test',
});
*/

app.use('/', routes);
app.use('/users', users);
app.use('/start', start);
app.use('/load', load);
app.use('/newgame', newgame);
app.use('/game', game);
app.use('/test', test);
app.use('/playerfetcher', playerfetcher);
// app.get('/partial/:name', routes); // test
// app.use('/home', home)

// partials test
app.get('/partials/:name', function(req, res){
  var name = req.params.name;
  res.render('partials/' + name);
});

// catch-all route so non-explicitly defined routes load angular routes
app.get('*', function(req, res){
    res.render('home'); //
});

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
