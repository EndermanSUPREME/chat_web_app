var mysql = require('mysql');

// Tests if the MySQL service is reachable on localhost
// and creates the DB to store user credentials if needed

var testCon = mysql.createConnection({
  host: "localhost",
  user: "db_handler",
  password: "notMadeForProduction"
});

testCon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

testCon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  testCon.query("CREATE DATABASE IF NOT EXISTS chat", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

function RegUser() {
/*
// Handles Inserting/Reading Registered User Information
var con = mysql.createConnection({
  host: "localhost",
  user: "db_handler",
  password: "notMadeForProduction",
  database: "chat"
});

con.connect(function(err) {
    if (err) throw err;

    // SQL Query sent to the DB
    var sql = "";
    con.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result.affectedRows + " record(s) updated");
    });
});
*/
};
