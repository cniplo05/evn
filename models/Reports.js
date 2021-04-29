'user strict';
var sql = require('../db.js');

//Task object constructor
var Report = function(report){
    this.message = report.message;
    this.harm = report.harm;
    this.created_at = new Date();
};

Report.createReport = function (newReport, result) {
    sql.query("INSERT INTO reports set ?", newReport, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
};

Report.getReportById = function (reportId, result) {
    sql.query("Select report from reports where id = ? ", reportId, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });
};

Report.getAllReport = function (result) {
    sql.query("Select id,message,harm,DATE_FORMAT(date_created, '%m-%d-%Y') as date_created from reports", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('reports : ', res);
                result(null, res);
            }
        });
};

Report.updateById = function(id, report, result){
    sql.query("UPDATE reports SET archived = ? WHERE id = ?", [1, id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            });
};

Report.remove = function(id, result){
    sql.query("DELETE FROM reportss WHERE id = ?", [id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                result(null, res);
            }
    });
};

module.exports= Report;