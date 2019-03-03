/**
 * Table name : classes
 * Created by Admin on 10/14/2016.
 */
var db = require('../../../mysqldb.js')

exports.createTable = function () {
    var query = "CREATE TABLE classes (" +
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
exports.create = function(dataArray, done) {
    var PresetData = [dataArray.length];
    for( var i = 0; i < dataArray.length; i++){
        PresetData[i] = [ dataArray[i].ClientName, "" + dataArray[i].SchemeName, "" + dataArray[i].Nature ,
            dataArray[i].sOption, dataArray[i].Foliono,  dataArray[i].amount, dataArray[i].unit, new Date(), new Date(dataArray[i].TransactionDate)];
    }

    db.get().query('INSERT INTO classes (clientname, schemename, natureid, soptionid, folionumber, amount, 	units, createdate, transactiondate) VALUES ?', [PresetData], function(err, result) {
        if (err) {
            return done(err);
        }
        done(null, result);
    });
};

exports.getAll = function(done) {
    db.get().query('SELECT * FROM classes', function (err, rows) {
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

exports.getAllByClientIdNull = function (done) {
    db.get().query('SELECT id , clientname FROM `clientsip` WHERE clientid IS NULL', function (err, rows) {
        if(err){
            return done(err)
        }else{
            done(null, rows)
        }
    });
};


exports.updateAllClientId = function (sipId, clientId, done) {
    var dataArr = [clientId, sipId];
    db.get().query('UPDATE `clientsip` SET clientid = ? WHERE id = ?', dataArr, function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    });
};

exports.Top5users =  function (done) {
    db.get().query('SELECT sum(currentvalue) as total,  clientname, clientid FROM `clientsip` WHERE aum.clientid IS NOT NULL GROUP BY aum.clientid ORDER BY total DESC  LIMIT 5', function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    })
};

exports.lastFourWeekSipTransaction = function (fromDate, toDate, done) {
    var queryData = [fromDate, toDate];
    db.get().query('SELECT DATE_FORMAT(transactiondate,"%d/%m/%Y") AS createdate, SUM(amount) AS total FROM `clientsip` ' +
        'WHERE `transactiondate` >=  ? And  `transactiondate` <= ? GROUP BY CAST(transactiondate AS DATE) ORDER BY transactiondate', queryData, function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    });
};

exports.lastFourWeekSipColumnChartTransaction = function (fromDate, toDate, done) {
    var queryData = [fromDate, toDate];
    db.get().query('SELECT SUM(total) as total, trndate as createdate FROM (SELECT DATE_FORMAT(transactiondate,"%Y/%m") AS trndate, ' +
        'SUM(amount) AS total FROM `clientsip` WHERE `transactiondate` >=  ? And  `transactiondate` <= ? ' +
        'GROUP BY CAST(transactiondate AS DATE) ) as newtb group by trndate ORDER BY trndate', queryData, function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    });
};

exports.lastFourWeekAumTransactionByParticularClients = function (clientIds, fromDate, toDate, done) {
    var queryData = [fromDate, toDate];
    db.get().query('SELECT clientid, DATE_FORMAT(transactiondate,"%d/%m/%Y")  AS createdate, SUM(amount) AS total FROM `clientsip`'+
        'WHERE clientid IN ('+clientIds+') AND `transactiondate` >=  ? And  `transactiondate` <= ? GROUP BY CAST(transactiondate AS DATE), clientid ORDER BY transactiondate',  queryData, function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    });
};

exports.lastFourWeekSipColumnChartTransactionByParticularClients = function (clientIds, fromDate, toDate, done) {
    var queryData = [fromDate, toDate];
    db.get().query('SELECT SUM(total) as total, trndate as createdate FROM (SELECT DATE_FORMAT(transactiondate,"%Y/%m") AS trndate, ' +
        'SUM(amount) AS total FROM `clientsip` WHERE clientid IN ('+clientIds+') AND `transactiondate` >=  ? And  `transactiondate` <= ? ' +
        'GROUP BY CAST(transactiondate AS DATE) ) as newtb group by trndate ORDER BY trndate',  queryData, function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    });
};

exports.getTotalSip = function (done) {
    db.get().query('SELECT SUM(amount) as total  FROM `clientsip`', function (err, rows) {
        if(err){
            return done(err);
        }else{
            done(null, rows);
        }
    })
};

exports.getPerformerTypeWithinDateRange = function(fromDate, toDate, noOfClients, performerType, done){
    var orderBy;
    if(performerType == "topperformer"){
        orderBy = "DESC";
    }else{
        orderBy = "ASC";
    }
    var dataList = [fromDate, toDate];
    db.get().query('SELECT sum(amount) as total, clientname from `clientsip` where `transactiondate` >=  ? And  `transactiondate` <= ?' +
        'GROUP BY clientid ORDER BY total '+orderBy+' Limit '+noOfClients, dataList, function (err, rows) {
        if(err){
            return done(err);
        }else{
            return done(null, rows);
        }
    })
}