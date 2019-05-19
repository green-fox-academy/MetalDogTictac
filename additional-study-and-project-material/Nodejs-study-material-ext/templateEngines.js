var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:name", function(req, res) {
  //injecting data into the views
  var data = { age: 29, job: "ninja", hobbies: ['eating', 'fighting', 'fishing'] };
  res.render("profile", { person: req.params.name, data: data }); //when using a template, we wont sendfile, but render the ejs file, in this case profile.ejs, adding objects into the second parameter
});
