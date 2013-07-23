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
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });




var crypto = require('crypto'),
      https = require("https");

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var credentials = function(){
	return crypto.createCredentials({key: privateKey, cert: certificate});
};

var handler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

// var port = process.env.PORT || 5000;
var server = https.createServer(credentials);
// server.setSecure(credentials);
server.addListener("request", handler);
server.listen(port);
console.log("Listening on port " + port);