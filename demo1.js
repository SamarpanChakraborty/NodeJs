var http = require('http');
var date = require('./datemod');

//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 3000.
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + date.myDateTime());
    res.end('Helleo India');
}).listen(3000);