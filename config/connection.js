var mysql = require("mysql");
var connection;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "cars_db"
});

}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }

});
module.exports = connection;



