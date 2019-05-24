"use strict";

const express = require("express");
const mysql = require("mysql");
const bookApp = express();
const PORT = 3000;
const path = require("path");
const table = "book_mast";

bookApp.use(express.json());

const mySQLConn = mysql.createConnection({
  host: "localhost",
  user: "lili",
  password: "12345678",
  database: "bookinfo"
});
//if this error: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
//run: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

mySQLConn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log("connection to DB is OK ✨");
});

bookApp.use(express.static(path.join(__dirname, "/static")));

bookApp.get("/", (req, res) => {
  res.sendFile("/index.html");
});

//select all book titles
bookApp.get("/getbooktitles", (req, res) => {
  mySQLConn.query(`SELECT book_name FROM ${table};`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send();
      return;
    }
    console.log("book titles successfully requested from bookinfo DB");
    res.send(rows);
  });
});

//select all info about the books, joining the various tables
bookApp.get("/allbooks", (req, res) => {
  mySQLConn.query(
    `SELECT book_mast.book_name, book_mast.book_price, author.aut_name, category.cate_descrip, publisher.pub_name FROM ${table} 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id;`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    }
  );
});

bookApp.listen(PORT, () => {
  console.log("Server started on port 3000");
});
