var PythonShell = require('python-shell');
exports.sendEmail = function(data, callback){
  var msg = {status:'success'};
  var emailSendTo = data.emailSendTo;
  var emailMsg = data.emailMsg;
  var emailSubject = data.emailSub;
  var options = {
    args: [emailSendTo, emailSubject, emailMsg]
  };
  PythonShell.run('./lib/sendemail.py', options, function (err) {
    if (err) throw err;
    console.log('finished');
    callback(null, msg);
  });
}