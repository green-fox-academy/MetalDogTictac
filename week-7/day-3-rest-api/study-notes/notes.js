//SERVING JSON DATA

var http = require("http");
var fs = require("fs");

var server = htps.createServer(function(req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });

  var myObj = {
    name: "Ryu",
    job: "ninja",
    age: 29
  };
  res.end(JSON.stringify(myObj)); //expects a string
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs, now listening to port 3000");

//ROUTE PARAMETERS IN EXPRESS

var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact page');
});

app.get('/profile/:id', function(req, res) {
    res.send('You requested to see a profile with the id of ' + req.params.id);
})

app.listen(3000);

//HANDLING POST REQUEST
- ask the server to accept/store data which is enclosed in the body of the request
- often used when submitting forms

-search for body-parser NPM; express route-specific

These have to be added to the HTML:

<form id="contact-form" method="POST" action="/contact"></form>

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//this is the middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/contact', urlencodedParser, function(req, res){ //middleware is gonna fire and pass the data to the server
    console.log(req.body);  //here we will get access to the body property of the request object
    res.render('contact-success', {data: req.body}) //render success page, we will get access to the data in the request body and pass it to the view
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query})
});






