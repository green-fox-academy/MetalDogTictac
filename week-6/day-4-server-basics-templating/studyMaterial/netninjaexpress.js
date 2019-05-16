var express = require('express');  //first we require the module

var app = express(); //express app is running now

app.get('/', function(req, res){      //setting up the route
    res.send('this is the homepage'); //sending a string, responding to GET request
});

app.get('/contact', function(req, res){     //responding to slashcontact request, after that we fire the function that takes the req and res objects fired by Express
    res.send('this is the contact page'); //we use the send on the response object
});

app.get('/', function(req, res){
    res.send('this is the homepage'); //sending a string
});

app.listen(3000); //here we listen to a port