var http = require('http');
var server = new http.Server();
server.on('request',function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('hello world');
});
