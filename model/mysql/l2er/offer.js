var db = require('../../../mysqldb.js');
var moment = require('moment');

exports.getAll = function(done) {
    var currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    var dataToCond = [currentTime, currentTime] ;
    db.get().query('SELECT * FROM projects WHERE projects.start_date > ? UNION SELECT * FROM classes where classes.start_date >  ? ', dataToCond, function (err, rows) {
        if (err){
            return done(err);
        }
        done(null, rows)
    });
};