"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.json());

const mySQLConn = mysql.createConnection({
  host: "localhost",
  user: "lili",
  password: "12345678"
  //database: ""
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

app.use(express.static(path.join(__dirname, "/static")));

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
