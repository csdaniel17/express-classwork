var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(reg, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function() {
  console.log('server is running at http://' + hostname + ':' + port);
});
