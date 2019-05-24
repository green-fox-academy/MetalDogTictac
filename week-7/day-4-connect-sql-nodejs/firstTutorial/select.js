//HOW TO QUERY/RETRIEVE DATA

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'articles',
    multipleStatements = true
})

connection.connect();

//website.com/articles?id=1
//website.com/articles?id=1; drop table articles;

var id = '1';

//dont forget to escape the arguments that the user gives you, in this case the id
var query = connection.query('select * from articles wh0ere id = ' + connection.escape(id), function(err, result) {
    console.log(query.sql);
})

