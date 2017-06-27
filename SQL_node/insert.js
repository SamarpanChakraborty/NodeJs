    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "test"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO employee (id, first_name, last_name, salary) VALUES ('3', 'Ajeet Kumar','', '2700')";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

    });