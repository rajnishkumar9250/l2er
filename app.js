var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var l2er = require('./routes/l2er');
var mysqldb = require('./mysqldb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/learn2earnbyrajnish')));

//Routing for http requests
app.use('/', index);

app.use('/users', users);

app.use('/l2er', l2er);



// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/


// Connect to MySQL on start
mysqldb.connect(mysqldb.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  }
});

app.mysqldb = mysqldb;
app.mysqldb.classes = require('./model/mysql/l2er/classes');
app.mysqldb.project = require('./model/mysql/l2er/projects');
app.mysqldb.classrequest = require('./model/mysql/l2er/classrequest');
app.mysqldb.projectrequest = require('./model/mysql/l2er/projectrequest');

app.config = require('./config');
app.maillib = require('./lib/mail');



var port = process.env.PORT || app.config.port;
app.listen(port, function() {
   console.log("Listening on " + port);
 });


module.exports = app;
