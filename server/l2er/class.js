//var mysqldbcon = require('./');


var moment = require('moment');

exports.getclasslist = function(req, res, next){
  //console.log('class lists', app);
  console.log('app req: ', req.app);
  req.app.mysqldb.classes.getAll(function(err, classlist){
    if(err){
      console.log('', err);
    }else{
      res.json({classlist:classlist});
    }
  });
};

exports.getclassdetail = function(req, res, next){
  console.log('class id: ', req.params.classid);
  var classId = req.params.classid;
  req.app.mysqldb.classes.getOneById(classId, function(err, classdetail){
    if(err){
      console.log('Error: ', err);
    }else{
      res.json({classdetail:classdetail});
    }
  });
};

exports.requestforclass = function(req, res, next){
  console.log('Body: ', req.body);
  var dataToInsert = {};
  dataToInsert.emailid = req.body.emailid;
  dataToInsert.mobileno = req.body.mobileno;
  dataToInsert.technology = req.body.technology;
  dataToInsert.description = req.body.description;
  dataToInsert.startdate = moment(req.body.startdate, "DD/MM/YYYY").format("YYYY-MM-DD");
  dataToInsert.enddate = moment(req.body.enddate, "DD/MM/YYYY").format("YYYY-MM-DD");
  dataToInsert.timing = req.body.timing;
  dataToInsert.noofstudents = req.body.noofstudents;
  dataToInsert.fee = req.body.fee;
  
  req.app.mysqldb.classrequest.create(dataToInsert, function(err, classdetail){
    if(err){
      console.log('Error: ', err);
    }else{
      var msgSub = 'Request for class ' + req.body.technology +' at learn2earnbyrajnish.com';
      var msgcontent = 'Hi, your request has been process.Once it is done, We will let you know.Thanks for query.';
      var msg = {emailSendTo:req.body.emailid, emailMsg: msgcontent, emailSub:msgSub};
      req.app.maillib.sendEmail(msg, function(err, msgData){
        if(err){
          throw new Error(err);
        }else{
          res.json({msg:msgData});
        }
      });
    }
  });
};

