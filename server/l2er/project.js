var moment = require('moment');

exports.getprojectlist = function(req, res, next){
  //console.log('class lists', app);
  console.log('app req: ', req.app);
  req.app.mysqldb.project.getAll(function(err, classlist){
    if(err){
      console.log('', err);
    }else{
      res.json({projectlist:classlist});
    }
  });
};

exports.getprojectdetail = function(req, res, next){
  console.log('class id: ', req.params.projectid);
  var projectId = req.params.projectid;
  req.app.mysqldb.project.getOneById(projectId, function(err, projectdetail){
    if(err){
      console.log('Error: ', err);
    }else{
      if(projectdetail && projectdetail.length>0){
        res.json({projectdetail:projectdetail[0]});
      }      
    }
  });
  
};

exports.requestforproject = function(req, res, next){
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
  
  req.app.mysqldb.projectrequest.create(dataToInsert, function(err, classdetail){
    if(err){
      console.log('Error: ', err);
    }else{
      var msgSub = 'Request for project ' + req.body.technology +' at learn2earnbyrajnish.com';
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