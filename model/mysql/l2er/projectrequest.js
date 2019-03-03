
/**
 * Table name : classes
 * Created by Admin on 10/14/2016.
 */
var db = require('../../../mysqldb.js')

exports.createTable = function () {
    var query = "CREATE TABLE classrequest (" +
        "id Int NOT NULL AUTO_INCREMENT," +
        "clientid int ," +
        "clientname VARCHAR(255) NOT NULL"
        "schemename VARCHAR(255) NOT NULL,"+
        "natureid VARCHAR(100) NOT NULL,"+
        "soptionid VARCHAR(100) NOT NULL,"+
        "folionumber VARCHAR(100)"+
        "amount VARCHAR(100) NOT NULL,"+
        "units VARCHAR(100) NOT NULL,"+
        "transactiondate VARCHAR(100) NOT NULL,"+
        "createdate VARCHAR(100) NOT NULL,"+
        "PRIMARY KEY (id))";
    db.get().query(query, function (err, result) {
        if(err){
            console.log("", err);
            return done(err);
        } else{
            done(null, result);
        }
    });
};
exports.create = function(dataToInsert, done) {
    db.get().query('INSERT INTO projectrequest SET ?', dataToInsert, function(err, result) {
        if (err) {
            return done(err);
        }
        done(null, result);
    });
};

exports.getAll = function(done) {
    db.get().query('SELECT * FROM projectrequest', function (err, rows) {
        if (err){
            return done(err);
        }
        done(null, rows)
    });
};

exports.getOneById = function(classId, done) {  
    db.get().query('SELECT cls.title as cls_title, cls.description as cls_description, cls.start_date, cls.end_date, cls.timing, cls.class_code, cls.fee as registration_fee,  usr.full_name as teacher_fullname, cls.teacher as teacherid, class_topic.description, class_topic.duration FROM classes as cls inner join users usr on cls.teacher = usr.id left join class_topic on cls.id = class_topic.classid  WHERE cls.id = ?', classId, function (err, rows) {
        if (err) return done(err)
        var result = {};
        if(rows && rows.length > 0){
          result.class_code = rows[0].class_code;
          result.cls_description = rows[0].cls_description;
          result.cls_title = rows[0].cls_title;
          result.end_date = rows[0].end_date;
          result.registration_fee = rows[0].registration_fee;
          result.start_date = rows[0].start_date;
          result.teacher_fullname = rows[0].teacher_fullname;
          result.teacherid = rows[0].teacherid;
          result.timing = rows[0].timing;
          result.syllabus = [];
        }
        for(var i=0; i< rows.length; i++){
          if(rows[i].description && rows[i].duration){
            var syll = {desc:rows[i].description, duration: rows[i].duration};
            result.syllabus.push(syll);  
          }
        }
        done(null, result);
    });
};