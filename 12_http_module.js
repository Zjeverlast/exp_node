const http = require('http');
const server = http.createServer((req, res) => {
    res.write('welcome to our page')
    res.end()
})
server.listen(5000, function (req, res){
    console.log('Running')
})



/*
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
  }).listen(8080);
  */