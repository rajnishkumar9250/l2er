var express = require('express');
var router = express.Router();

var classes = require('./../server/l2er/class');
var projects = require('./../server/l2er/project');
var offer = require('./../server/l2er/offer');



/* GET users listing. */
router.get('/classes', classes.getclasslist);
router.get('/getclassdet/:classid', classes.getclassdetail);
router.post('/requestforclass', classes.requestforclass);

router.get('/projects', projects.getprojectlist);
router.get('/getprojectdet/:projectid', projects.getprojectdetail);

router.get('/offers', offer.getOfferList);

router.post('/requestforproject', projects.requestforproject);





module.exports = router;
