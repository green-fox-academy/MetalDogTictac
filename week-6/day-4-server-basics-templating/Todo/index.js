"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

const todos = [
  "get up",
  "be awesome",
  "continue being awesome and continue learning to code!"
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { todos: todos });
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
