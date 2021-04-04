var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "root",
    password: "zroot",
    database: "test"
});
connection.connect();

connection.query("SELECT * FROM account",function(error,results,fields){
    //如果查询报错直接抛出
    if(error) throw error;
    console.log("results = ",results);
});

connection.end
