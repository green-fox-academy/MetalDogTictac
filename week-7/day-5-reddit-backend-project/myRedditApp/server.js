"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3000;
const path = require("path");
const POST_TABLE = "posts";

app.use(express.json());
app.use(express.static(path.join(__dirname, "/static")));

const mySQLConn = mysql.createConnection({
  host: "localhost",
  user: "lili",
  password: "12345678",
  database: "reddit"
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


app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
