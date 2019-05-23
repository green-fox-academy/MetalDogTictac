const express = require("express");
const mysql = require("mysql");
const bookApp = express();
const PORT = 3000;
const table = 'book_mast';

bookApp.use(express.json());

// create connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "lili",
  password: "12345678",
  database: "bookinfo"
});

//connect
conn.connect(err => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('connection to DB is OK ✨');
  });

//select all book titles
bookApp.get('/getbooktitles', (req, res) => {
    conn.query(`SELECT book_name FROM ${table};`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log('book titles successfully requested from bookinfo DB');
      res.send(rows);
    });
  });


bookApp.listen("3000", () => {
  console.log("Server started on port 3000");
});
