var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.IP,
    user: "elvinsamuel-webdevbootcamp-4973667",
    password: ""
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Result: ${result}`);
    });
});