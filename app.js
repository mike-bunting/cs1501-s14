var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8888);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

app.get('/games', function(req, res){
  res.render('games', {
    title: 'Games'
  });
});

app.get('/projects', function(req, res){
  res.render('projects', {
    title: 'Projects'
  });
});

app.get('/cars', function(req, res){
  res.render('cars', {
    title: 'Cars'
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});