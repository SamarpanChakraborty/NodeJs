    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "test"
    });
    con.connect(function(err) {
        if (err) throw err;
        var sql = "DROP TABLE employee2";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table deleted");
        });
    });