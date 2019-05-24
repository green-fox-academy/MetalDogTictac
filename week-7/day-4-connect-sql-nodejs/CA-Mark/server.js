'use strict';


const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const PORT = 3007;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mySQLConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'forseti'
});

mySQLConn.connect((err) => {
    if (err) {
        console.error(err, 'upsey');
    } else {
        console.log('connected to database named forseti')
    }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/songs', (req, res) => {
    mySQLConn.query('SELECT * FROM songs', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    })
})

app.post('/addsong', (req, res) => {
    mySQLConn.query('INSERT INTO songs(title, singer, url) VALUES(?,?,?)',
        [req.body.title, req.body.singer, req.body.url,]);
    res.redirect('/');
})


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));