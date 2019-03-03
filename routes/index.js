var express = require('express');
var router = express.Router();
var app = require('../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/learn2earnbyrajnish/index.html');
  
});

module.exports = router;
