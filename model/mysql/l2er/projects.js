/**
 * Table name : classes
 * Created by Admin on 10/14/2016.
 */
var db = require('../../../mysqldb.js');

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

    db.get().query('INSERT INTO projects (clientname, schemename, natureid, soptionid, folionumber, amount, 	units, createdate, transactiondate) VALUES ?', [PresetData], function(err, result) {
        if (err) {
            return done(err);
        }
        done(null, result);
    });
};

exports.getAll = function(done) {
    db.get().query('SELECT * FROM projects', function (err, rows) {
        if (err){
            return done(err);
        }
        done(null, rows)
    });
};

exports.getOneById = function(projectId, done) {  
    db.get().query('SELECT proj.title as proj_title, proj.description as proj_description, proj.start_date, proj.end_date, proj.timing, proj.project_code, proj.fee as registration_fee,  usr.full_name as teacher_fullname, proj.teacher as teacherid FROM projects as proj inner join users usr on proj.teacher = usr.id  WHERE proj.id = ?', projectId, function (err, rows) {
        if (err) return done(err)        
        done(null, rows);
    });
};
