var express = require('express');
var _ = require('underscore');
var fs = require("fs");


var app = express();

app.use("/scripts", express.static(__dirname + '/public/scripts'));
app.use("/images", express.static(__dirname + '/public/images'));

app.get('/', function(request, response) {
  response.sendfile("index.html");
});

app.get('/capture', function(request, response){
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});