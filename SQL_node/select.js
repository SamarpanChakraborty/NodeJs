var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employee", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});