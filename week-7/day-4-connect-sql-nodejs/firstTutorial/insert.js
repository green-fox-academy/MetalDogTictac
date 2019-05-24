var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'articles'
})

connection.connect();

var article = {
    author: 'Alex Booker',
    title: 'Node tutorial',
    body: 'foo bar'
};

var query = connection.query('insert into articles set ?', article, function (err, result){
    console.log(query); //prints out the sequel thats generated
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);













}); //? is a placeholder 